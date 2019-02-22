import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpClientModule} from '@angular/common/http'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Perritos2Page } from '../pages/perritos2/perritos2';
import { PerritosPage } from '../pages/perritos/perritos';
import { EmpleoPage } from '../pages/empleo/empleo';
import { Empleo2Page } from '../pages/empleo2/empleo2';
import { TabsPage } from '../pages/tabs/tabs';
import { BuscarPage } from '../pages/buscar/buscar';
import { ConsolasPage } from '../pages/consolas/consolas';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritoPage } from '../pages/favorito/favorito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerritosPage,
    Perritos2Page,
    EmpleoPage,
    Empleo2Page,
    TabsPage, 
    BuscarPage,
    ConsolasPage,
    FavoritoPage
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
    PerritosPage,
    Perritos2Page,
    EmpleoPage,
    Empleo2Page,
    TabsPage,
    BuscarPage,
    ConsolasPage,
    FavoritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
