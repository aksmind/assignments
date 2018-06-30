import { Component, OnInit } from '@angular/core';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-cloudinary',
  templateUrl: './cloudinary.component.html',
  styleUrls: ['./cloudinary.component.css']
})
export class CloudinaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Cloudinary App';

}
