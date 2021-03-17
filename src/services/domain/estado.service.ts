import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../../config/api.config";
import { EstadoDTO } from "../../models/estado.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class EstadoService {

    constructor(public htpp : HttpClient){

    }

    findAll() : Observable<EstadoDTO[]> {
        return this.htpp.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}