import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';

const routes: Routes = [
  { path: '', component: GooglemapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveGooglemapRoutingModule { }
