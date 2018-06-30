import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegexComponent } from './regex/regex.component';

const routes: Routes = [
  { path: '', component: RegexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SixValidationRoutingModule { }
