import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id_favorite:string;
  noticias = [];

  constructor(public navCtrl: NavController) {
  }

  inserir(descricao) {
    this.noticias.push({descricao});
  }

  removerPrimeiro() {
    this.noticias.shift();
  }
}
