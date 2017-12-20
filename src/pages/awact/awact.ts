import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-awact',
  templateUrl: 'awact.html',
})
export class AwactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

	addPost() {
	this.navCtrl.push('PostPage'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwactPage');
  }

}
