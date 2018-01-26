import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppPreferences } from '@ionic-native/app-preferences';

import { ListProvider } from '../providers/list/list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppPreferences,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListProvider,
    SQLite
  ]
})
export class AppModule {}
