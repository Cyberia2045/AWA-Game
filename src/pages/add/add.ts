import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  
  awact = {}

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  create(data) {
    
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: "https://peaceful-fortress-16828.herokuapp.com/awacts",
            headers: headers,
            body: JSON.stringify(data)
        })

    this.http.post("https://peaceful-fortress-16828.herokuapp.com/awacts", requestoptions)
      .map(res => res.json())
      .subscribe();
  }
  
  createAwact() {
    this.create(this.awact)
    this.navCtrl.pop(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
