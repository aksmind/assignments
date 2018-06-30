import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenAudioRoutingModule } from './ten-audio-routing.module';
import { AudioComponent } from './audio/audio.component';

@NgModule({
  imports: [
    CommonModule,
    TenAudioRoutingModule
  ],
  declarations: [AudioComponent]
})
export class TenAudioModule { }
