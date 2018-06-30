import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadService } from './file-upload.service';
import { OneParseRoutingModule } from './one-parse-routing.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    OneParseRoutingModule
  ],
  declarations: [UploadComponent]
})
export class OneParseModule { }
