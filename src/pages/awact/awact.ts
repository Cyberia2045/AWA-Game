import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-awact',
  templateUrl: 'awact.html',
})
export class AwactPage {
  
  awact = {};
  posts = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

	addPost() {
	this.navCtrl.push('PostPage'); 
  }

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    this.http.get('http://localhost:4567/awacts/' + id).subscribe(data => {
      this.posts = data.json().posts.reverse();
      this.awact = data.json().awact;
    });
  }

}
