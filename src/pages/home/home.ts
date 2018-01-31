import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { SQLite } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listNews = [];

  constructor(public navCtrl: NavController, public sqlite: SQLite) {
    this.createDB();
  }

  getDB() {
    return this.sqlite.create({
      name: 'news.db',
      location: 'default'
    })
  }

  createDB() {
    return this.getDB().then((sql) => {
      sql.executeSql('CREATE TABLE news (desc TEXT)', []);
    })
  }

  updateNews(){
    return this.getDB().then((sql) => {
      sql.executeSql('SELECT * FROM news;', []).then((news) => {
        this.listNews = [];
        for (let i = 0; i < news.rows.lenght; i++) {
          // let new = news.rows.item(i);
          // this.listNews.push({
          //   desc: new.desc,
          // });
        }
      });
    });
  }

  insert(desc) {
    this.listNews.push({desc: desc});
  }

  removerPrimeiro() {
    this.listNews.shift();
  }
}
