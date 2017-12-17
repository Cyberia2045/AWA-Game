import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

	private images: any;
	public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {}

  ngOnInit() {
  	this.images = [];
  }

  takePicture() {}
}
