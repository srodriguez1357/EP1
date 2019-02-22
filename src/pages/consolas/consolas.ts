import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the ConsolasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consolas',
  templateUrl: 'consolas.html',
})
export class ConsolasPage {
consola = {};
imgs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public fav : FavoritosProvider ) {
    this.consola = this.navParams.get('producto');
    if (this.consola.ad.hasOwnProperty('images'))
    {
      this.imgs = this.consola.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolasPage');
  }
  
  favoritos(casa){
    this.fav.addFavoritos(casa);
  }

  

}
