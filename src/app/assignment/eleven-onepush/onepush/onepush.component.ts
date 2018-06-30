import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onepush',
  templateUrl: './onepush.component.html',
  styleUrls: ['./onepush.component.css']
})
export class OnepushComponent implements OnInit {

  title = 'One Push App';
  constructor() { }

  ngOnInit() {
    var OneSignal = window['OneSignal'] || [];
    console.log("Init OneSignal");
    OneSignal.push(function() {
      OneSignal.init({
        appId: "9a3e0825-f048-4ab8-970d-02d116352825",
        autoRegister: false,
        //allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true
        },
      });
    });
  }

}
