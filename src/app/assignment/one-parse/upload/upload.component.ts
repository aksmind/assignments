import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MyInterface } from '../my-interface';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  form: FormGroup;
  loading = false;
  data: any ;
  //mainData: any = '';
  mainData: MyInterface;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      fileUpload: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('fileUpload').setValue(file);
      console.log(file);

      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.data = JSON.parse(fileReader.result);
        this.mainData = this.data;
      };
      fileReader.readAsText(file);
    }
    console.log();
  }

}
