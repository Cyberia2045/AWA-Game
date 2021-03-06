import { Component } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AwactPage } from '../awact/awact';

@IonicPage()
@Component({
  selector: 'page-awacts',
  templateUrl: 'awacts.html',
})
export class AwactsPage {
  
  awacts = [];
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  addAwact() {
    this.navCtrl.push('AddPage'); 
  }
  
  markInProgress(id) {
    const data = {awact_id: id}
    
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: "https://peaceful-fortress-16828.herokuapp.com/awacts/start",
            headers: headers,
            body: JSON.stringify(data)
        })
    
        this.http.post("https://peaceful-fortress-16828.herokuapp.com/awacts/start", requestoptions)
          .map(res => res.json())
          .subscribe();
  }
  
  navToAwact(id) {
    this.navCtrl.push(AwactPage, {
      id: id
    });
  }
  
  ionViewDidLoad() {
    this.http.get('https://peaceful-fortress-16828.herokuapp.com').subscribe(data => {
      this.awacts = data.json().reverse();
    });
  }

}
