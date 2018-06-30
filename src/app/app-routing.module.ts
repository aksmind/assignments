import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'upload', loadChildren:'./assignment/one-parse/one-parse.module#OneParseModule' },
    { path: 'firebase', loadChildren: './assignment/two-phone/two-phone.module#TwoPhoneModule' },
    { path: 'razorpay', loadChildren: './assignment/four-razorpay/four-razorpay.module#FourRazorpayModule' },
    { path: 'googlemap', loadChildren: './assignment/five-googlemap/five-googlemap.module#FiveGooglemapModule'},
    { path: 'regex', loadChildren: './assignment/six-validation/six-validation.module#SixValidationModule' },
    { path: 'cloudinary', loadChildren: './assignment/seven-cloudinary/seven-cloudinary.module#SevenCloudinaryModule'},
    { path: 'country', loadChildren: './assignment/eight-country/eight-country.module#EightCountryModule' },
    { path: 'youtube', loadChildren: './assignment/nine-youtube/nine-youtube.module#NineYoutubeModule' },
    { path: 'audio', loadChildren: './assignment/ten-audio/ten-audio.module#TenAudioModule' },
    { path: 'onepush', loadChildren: './assignment/eleven-onepush/eleven-onepush.module#ElevenOnepushModule' }
    
  ];
   
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}