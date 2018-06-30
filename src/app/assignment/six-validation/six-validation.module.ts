import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EqualValidator } from './regex/password.match.directive';
import { RegexComponent } from './regex/regex.component';
import { SixValidationRoutingModule } from './six-validation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SixValidationRoutingModule
  ],
  declarations: [RegexComponent, EqualValidator]
})
export class SixValidationModule { }
