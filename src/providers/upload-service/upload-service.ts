import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
  import { File } from '@ionic-native/file';
  

@Injectable()
export class UploadServiceProvider {
  apiUrl = "localhost:4567"
  constructor(public http: Http, private transfer: FileTransfer, private file: File) {
  }

  //config S3 params
  s3UploadConfig(file, s3Params) {
    return{
      url: s3Params.bucket_name,
      method: 'POST',
      chunkedMode: false,
      headers: {
        connection: "close"
      },
      params : {
        key: `uploads/${file.substr(file.lastIndexOf('/')+1)}`,
        AWSAccessKeyId: s3Params.key,
        acl: s3Params.acl,
        policy: s3Params.policy,
        signature: s3Params.signature,
        'Content-Type' : "image/jpeg"
      }
    };
  }

  // Get Signature
  generateSignature() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    // headers.append('Authorization-Token', token);

    const options: RequestOptions = new RequestOptions();
    options.headers = headers;
    // Call API to get Signature
    return this.http.get(`${this.apiUrl}/generate-signature`, options)
  }

  // Upload Image to s3
  upload(file,token): Promise<any>{
    return new Promise((resolve, reject) => {
      this.generateSignature()
        .map(response => response.json().data)
        .subscribe(
          response => {
            let s3Params = response;
            let serveConfig = this.s3UploadConfig(file, s3Params);
            let key = `uploads/${file.substr(file.lastIndexOf('/')+1)}`;
            const fileTransfer: FileTransferObject = this.transfer.create();

            fileTransfer.upload(file, encodeURI(s3Params.bucket_name), serveConfig)
              .then((result) => {
                // when finished upload photo. S3 will return a link of image.
                // This link is combined from `s3Params.bucket_name + key`
                resolve(s3Params.bucket_name + key);
              }, (error) => {
                resolve(error.json());
              });
          });
    });
  }

}
