import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerritosPage } from './perritos';

@NgModule({
  declarations: [
    PerritosPage,
  ],
  imports: [
    IonicPageModule.forChild(PerritosPage),
  ],
})
export class PerritosPageModule {}
