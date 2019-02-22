import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FavoritosProvider} from '../../providers/favoritos/favoritos';
/**
 * Generated class for the Empleo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo2',
  templateUrl: 'empleo2.html',
})
export class Empleo2Page {
empleo = {};
imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavoritosProvider ) {
    this.empleo = this.navParams.get('empleo');
    if (this.empleo.ad.hasOwnProperty('images'))
    {
      this.imgs = this.empleo.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Empleo2Page');
  }
  
  favoritos(casa){
    this.fav.addFavoritos(casa);
  }


}
