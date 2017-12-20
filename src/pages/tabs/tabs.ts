import { Component } from '@angular/core';

import { AwactsPage } from '../awacts/awacts';
import { CameraPage } from '../camera/camera';
import { ProfilePage } from '../profile/profile';
import { AddPage } from '../add/add';
import { PostPage } from '../post/post';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AwactsPage;
  tab2Root = ProfilePage;
  tab3Root = CameraPage;
  // tab4Root = AddPage;

  constructor() {

  }
}
