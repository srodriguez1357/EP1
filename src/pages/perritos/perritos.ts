import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { Perritos2Page } from '../perritos2/perritos2';

/**
 * Generated class for the PerritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perritos',
  templateUrl: 'perritos.html',
})
export class PerritosPage {
  perritos = [];
  Perritos2Page = Perritos2Page;
  buscarPage = BuscarPage;  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {

      this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        if(data.hasOwnProperty('counter_map'))
        {
          console.log(data.counter_map.all);
        }
        if (data.hasOwnProperty('list_ads'))
          {
            this.perritos = data.list_ads;
          }
        
      },
      error => {
        console.log(JSON.stringify(error));
      })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerritosPage');
  }

  verL(perrito){
    this.navCtrl.push(this.Perritos2Page, {perrito: perrito});
  }

  buscar()
  {
    this.navCtrl.push(this.buscarPage, {perritos: this.perritos});
  }

}
