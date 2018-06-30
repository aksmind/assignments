import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrycodeComponent } from './countrycode/countrycode.component';

const routes: Routes = [
  { path: '', component: CountrycodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EightCountryRoutingModule { }
