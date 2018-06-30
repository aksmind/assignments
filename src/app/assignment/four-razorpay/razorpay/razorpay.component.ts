import { Component, OnInit } from '@angular/core';
declare const Razorpay:any;

@Component({
  selector: 'app-razorpay',
  templateUrl: './razorpay.component.html',
  styleUrls: ['./razorpay.component.css']
})
export class RazorpayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Razor Pay App';

  onSubmit(){
    let options = {
      "key": "rzp_test_SX5FufpxMaBDD0",
      "amount": "50000", // 50000 paise = INR 500
      "name": "Aksmind",
      "description": "fully furnished",
      "image": "https://cdn.dribbble.com/users/1659516/screenshots/3794216/aks_dribbble_1x.jpg",
      "handler": function (response){
          alert(response.razorpay_payment_id);
      },
      "prefill": {
          "name": "Harshil Mathur",
          "email": "harshil@razorpay.com"
      },
      "notes": {
          "address": "Hello World"
      },
      "theme": {
          "color": "#F37254"
      }
  };
  let rzp1 = new Razorpay(options);
  rzp1.open();
  }
  

}
