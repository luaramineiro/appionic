import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id_favorite:string;

  constructor(public navCtrl: NavController, private appPrefs:AppPreferences) {
    this.id_favorite = 'TESTE';
    //get preferences
    appPrefs.fetch('dict', 'id_favorite').then((res) => this.id_favorite = res);
    //set preferences
    appPrefs.store('dict', 'id_favorite', this.id_favorite).then(() => console.log('save value!'));
  }
}
