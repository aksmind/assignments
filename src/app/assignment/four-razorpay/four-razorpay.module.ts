import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { FourRazorpayRoutingModule } from './four-razorpay-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FourRazorpayRoutingModule
  ],
  declarations: [RazorpayComponent]
})
export class FourRazorpayModule { }
