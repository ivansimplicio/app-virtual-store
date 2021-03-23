import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua das Flores",
        numero: "74",
        complemento: "Casa",
        bairro: "Centro",
        cep: "58396000",
        cidade: {
          id: "1",
          nome: "Arara",
          estado: {
            id: "1",
            nome: "Paraíba"
          }
        }
      },
      {
        id: "2",
        logradouro: "Rua Gama Rosa",
        numero: "123",
        complemento: "Apto 201",
        bairro: "Centro",
        cep: "58396000",
        cidade: {
          id: "2",
          nome: "Campinas",
          estado: {
            id: "2",
            nome: "São Paulo"
          }
        }
      }
    ];
  }
}