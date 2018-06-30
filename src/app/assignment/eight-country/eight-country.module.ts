import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EightCountryRoutingModule } from './eight-country-routing.module';
import { CountrycodeComponent } from './countrycode/countrycode.component';
import { ApiService } from './countrycode/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    EightCountryRoutingModule
  ],
  providers: [ApiService],
  declarations: [CountrycodeComponent]
})
export class EightCountryModule { }
