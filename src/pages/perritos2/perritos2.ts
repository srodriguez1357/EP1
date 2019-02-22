import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FavoritosProvider} from '../../providers/favoritos/favoritos';

/**
 * Generated class for the Perritos2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perritos2',
  templateUrl: 'perritos2.html',
})
export class Perritos2Page {
perrito = {};
imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav : FavoritosProvider) {
      this.perrito = this.navParams.get('perrito');
    if (this.perrito.ad.hasOwnProperty('images'))
    {
      this.imgs = this.perrito.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perritos2Page');
  }

  favoritos(casa){
    this.fav.addFavoritos(casa);
  }


}
