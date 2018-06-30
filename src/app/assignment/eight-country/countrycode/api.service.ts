import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private postsUrl = "../../../../assets/country.json";

  constructor(private http:HttpClient ) { }

  public getData(){
    return this.http.get<any>(this.postsUrl);
  }

  

}
