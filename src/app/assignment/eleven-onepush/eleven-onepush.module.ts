import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElevenOnepushRoutingModule } from './eleven-onepush-routing.module';
import { OnepushComponent } from './onepush/onepush.component';

@NgModule({
  imports: [
    CommonModule,
    ElevenOnepushRoutingModule
  ],
  declarations: [OnepushComponent]
})
export class ElevenOnepushModule { }
