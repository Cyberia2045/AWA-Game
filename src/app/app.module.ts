import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AwactPageModule } from '../pages/awact/awact.module';
import { AwactsPageModule } from '../pages/awacts/awacts.module';
import { PostPageModule } from '../pages/post/post.module';
import { CameraPage } from '../pages/camera/camera';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { AddPageModule } from '../pages/add/add.module';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UploadServiceProvider } from '../providers/upload-service/upload-service';

@NgModule({
  declarations: [
    MyApp,
    CameraPage,
    // ProfilePage,
    // AddPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AwactsPageModule,
    AwactPageModule,
    ProfilePageModule,
    PostPageModule,
    AddPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AwactsPage,
    CameraPage,
    // ProfilePage,
    // AddPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UploadServiceProvider
  ]
})
export class AppModule {}
