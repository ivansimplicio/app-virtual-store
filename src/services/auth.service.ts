import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelper } from "angular2-jwt";
import { API_CONFIG } from "../config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { LocalUser } from "../models/local_user";
import { CartService } from "./domain/cart.service";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService {

    jwtHelper : JwtHelper = new JwtHelper();

    constructor(
        public http : HttpClient,
        public storageService: StorageService,
        public cartService: CartService){
    }

    authenticate(creds: CredenciaisDTO){
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    refreshToken(){
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }

    successfulLogin(authorizationValue: string){
        let token = authorizationValue.substring(7);
        let user : LocalUser = {
            token,
            email : this.jwtHelper.decodeToken(token).sub
        };
        this.storageService.setLocalUser(user);
        this.cartService.createOrClearCart();
    }

    logout(){
        this.storageService.setLocalUser(null);
    }
}