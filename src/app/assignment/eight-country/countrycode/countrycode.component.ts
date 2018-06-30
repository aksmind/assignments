import { Component, OnInit } from '@angular/core';
import { MyInterface } from './my-interface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-countrycode',
  templateUrl: './countrycode.component.html',
  styleUrls: ['./countrycode.component.css']
})
export class CountrycodeComponent implements OnInit {

  title = 'Country Code App';
  flag: boolean = true;
  currValue;
  native;
  coFlag;
  code;
  public data: any;

  AllData: MyInterface[];
  constructor(private api: ApiService){}
  
  ngOnInit(){
    this.api.getData()
    .subscribe(
      (success) => {
        this.AllData = success;
        console.log(success);
      },
      err => console.log(err)
    )
  }

  num(countryName:string){
    // console.log(countryName);
    // console.log(this.AllData[0].nativeName);
    this.flag = false;
    this.currValue = countryName;
    this.data = this.AllData.filter(data => data.name === countryName)[0];    
    // this.native = temp.nativeName;
    // this.coFlag = temp.flag;
    // this.code = temp.callingCodes;
  }

}
