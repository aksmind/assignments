import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imgurl;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({
      cloudName: 'dqpbdfiv3',
      uploadPreset: 'aslgqokq'
    })
  );
  loading: any;

  constructor() { }

  ngOnInit() {
  }

  upload(){
    this.loading = true;
    this.uploader.uploadAll();

    this.uploader.onSuccessItem = (item:any, response: string, status: number, headers:any): any => {
      let res: any = JSON.parse(response);
      console.log(res);
      console.log("Uploaded Successfullyyyyyyyy");
      this.imgurl = res.url;
    }

    this.uploader.onErrorItem = function(fileItem, response, status, headers){
      console.info('onErrorItem', fileItem, response, status, headers);
      console.log("Uploaded Error");
    };
    //console.log("Uploaded Successfully");
  }

}
