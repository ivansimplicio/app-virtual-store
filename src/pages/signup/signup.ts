import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['João Miguel', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['jm@email.com', [Validators.required, Validators.email]],
        tipo: ['1', Validators.required],
        cpfOuCnpj: ['92920541048', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ['senha123', Validators.required],
        logradouro: ['Rua Gama Rosa', Validators.required],
        numero: ['99', Validators.required],
        complemento: ['Casa', []],
        bairro: ['centro', []],
        cep: ['58396000', [Validators.required]],
        telefone1: ['83999999999', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }

  signupUser(){
    console.log('Enviou o form');
  }
}