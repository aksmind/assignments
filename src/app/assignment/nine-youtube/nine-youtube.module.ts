import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NineYoutubeRoutingModule } from './nine-youtube-routing.module';
import { YoutubeComponent } from './youtube/youtube.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    NineYoutubeRoutingModule
  ],
  declarations: [YoutubeComponent]
})
export class NineYoutubeModule { }
