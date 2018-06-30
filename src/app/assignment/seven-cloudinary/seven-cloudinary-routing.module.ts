import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudinaryComponent } from './cloudinary/cloudinary.component';

const routes: Routes = [
  { path: '', component: CloudinaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevenCloudinaryRoutingModule { }
