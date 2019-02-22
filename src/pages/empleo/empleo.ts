import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { Empleo2Page } from '../empleo2/empleo2';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {
empleos = [];
empleo2Page = Empleo2Page;
buscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {

      this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
      .subscribe(data => {
        if(data.hasOwnProperty('counter_map'))
        {
          console.log(data.counter_map.all);
        }
        if (data.hasOwnProperty('list_ads'))
          {
            this.empleos = data.list_ads;
          }
        
      },
      error => {
        console.log(JSON.stringify(error));
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleoPage');
  }

  verE(empleo){
    this.navCtrl.push(this.empleo2Page, {empleo: empleo});
  }

  buscar()
  {
    this.navCtrl.push(this.buscarPage, {empleos: this.empleos});
  }
}
