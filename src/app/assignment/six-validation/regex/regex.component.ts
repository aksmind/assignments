import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-regex',
  templateUrl: './regex.component.html',
  styleUrls: ['./regex.component.css']
})
export class RegexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Form Validation';
  powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer'];
  model = new User('','',null,'','','');
  submitted = false;
  onSubmit() {
    this.submitted = true; 
  }

}
