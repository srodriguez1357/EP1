import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerritosPage } from '../perritos/perritos';
import { EmpleoPage } from '../empleo/empleo';
import { HomePage } from '../home/home';
import { FavoritoPage } from '../favorito/favorito';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = PerritosPage;
  tab2 = EmpleoPage;
  tab3 = HomePage;
  tab4 = FavoritoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
