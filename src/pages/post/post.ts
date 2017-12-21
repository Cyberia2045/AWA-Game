import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

	post = {}

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

	create(data) {
    
    data.awact_id = this.navParams.get('awact_id');

	const headers: Headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append('Accept', 'application/json');
	var requestoptions = new RequestOptions({
	        method: RequestMethod.Post,
	        url: "http://localhost:4567/posts",
	        headers: headers,
	        body: JSON.stringify(data)
	    })

	this.http.post("http://localhost:4567/posts", requestoptions)
	  .map(res => res.json())
	  .subscribe();
	 }

  createPost() {
    this.create(this.post)
    this.navCtrl.pop(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

}
