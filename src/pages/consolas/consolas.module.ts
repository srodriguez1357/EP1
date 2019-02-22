import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsolasPage } from './consolas';

@NgModule({
  declarations: [
    ConsolasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsolasPage),
  ],
})
export class ConsolasPageModule {}
