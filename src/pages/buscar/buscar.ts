import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Perritos2Page } from '../perritos2/perritos2';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  casas = [];
  items = [];
  casaPage = Perritos2Page;


  constructor(public navCtrl: NavController, public navParams: NavParams)
     {
      this.casas = this.navParams.get('productos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev){
    console.log(ev.target.value);
    this.items = this.casas.filter(casa => {
      return casa.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    })
  }

  
  verCasa(casa){
    this.navCtrl.push(this.casaPage, {casa: casa});
  }


}
