import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { Perritos2Page } from '../perritos2/perritos2';

/**
 * Generated class for the FavoritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorito',
  templateUrl: 'favorito.html',
})
export class FavoritoPage {
  items=[];
  casaPage = Perritos2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritosProvider) {
      this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritoPage');
  }

  verCasa(casa) {
    this.navCtrl.push(this.casaPage, {perrito: casa});
  }

}
