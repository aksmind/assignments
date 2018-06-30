import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnepushComponent } from './onepush/onepush.component';

const routes: Routes = [
  { path: '', component: OnepushComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElevenOnepushRoutingModule { }
