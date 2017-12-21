import { Component } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { PostPage} from '../pages/post/post';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  userAwacts = [];
  completedAwacts = [];
  
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public platform: Platform){}

  markComplete(id) {
    const data = {awact_id: id}
    
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: "http://localhost:4567/awacts/complete",
            headers: headers,
            body: JSON.stringify(data)
        })
    
        this.http.post("http://localhost:4567/awacts/complete", requestoptions)
          .map(res => res.json())
          .subscribe();
  }
  
  addPost(id) {
    this.navCtrl.push('PostPage', {
      awact_id: id
    })
  }

  ionViewDidEnter() {
    this.http.get('http://localhost:4567/users/1').subscribe(data => {
      console.log(data)
      this.completedAwacts = data.json().completed_awacts
      this.userAwacts = data.json().in_progress_awacts
    });
  }
  
  

}
