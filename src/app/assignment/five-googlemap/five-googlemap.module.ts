import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FiveGooglemapRoutingModule } from './five-googlemap-routing.module';
import { GooglemapComponent } from './googlemap/googlemap.component';

//AIzaSyASs8r0-AH_IkGaI_yVMkQo7FzVl2Uo4Dk

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASs8r0-AH_IkGaI_yVMkQo7FzVl2Uo4Dk',
      libraries: ["places"]
    }),
    ReactiveFormsModule,
    FiveGooglemapRoutingModule
  ],
  declarations: [GooglemapComponent]
})
export class FiveGooglemapModule { }
