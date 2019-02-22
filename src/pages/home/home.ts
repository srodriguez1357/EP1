import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ConsolasPage } from '../consolas/consolas';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
productos = [];
productoPage = ConsolasPage;
buscarPage = BuscarPage;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

      this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(data => {
        if(data.hasOwnProperty('counter_map'))
        {
          console.log(data.counter_map.all);
        }
        if (data.hasOwnProperty('list_ads'))
          {
            this.productos = data.list_ads;
          }
        
      },
      error => {
        console.log(JSON.stringify(error));
      })
  }
  verP(producto){
    this.navCtrl.push(this.productoPage, {producto: producto});
  }

  buscar()
  {
    this.navCtrl.push(this.buscarPage, {productos: this.productos});
  }




}
