import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazorpayComponent } from './razorpay/razorpay.component';

const routes: Routes = [
  { path: '', component: RazorpayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourRazorpayRoutingModule { }
