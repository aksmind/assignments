import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { SevenCloudinaryRoutingModule } from './seven-cloudinary-routing.module';
import { CloudinaryComponent } from './cloudinary/cloudinary.component';
import { UploadComponent } from './cloudinary/upload/upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    SevenCloudinaryRoutingModule
  ],
  declarations: [CloudinaryComponent, UploadComponent]
})
export class SevenCloudinaryModule { }
