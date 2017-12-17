import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AwactsPage } from './awacts';

@NgModule({
  declarations: [
    AwactsPage,
  ],
  imports: [
    IonicPageModule.forChild(AwactsPage),
  ],
})
export class AwactsPageModule {}
