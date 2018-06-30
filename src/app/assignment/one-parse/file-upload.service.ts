import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class FileUploadService {

  private url = "../assets/data.json";
  constructor(private http: HttpClient) { }

  public getData(){
    return this.http.get<any>(this.url);
  }

  postFile(FileToUpload: File): Observable<boolean>{
    const endpoint = '../contents';
    const formData : FormData = new FormData();
    formData.append('fileKey',FileToUpload,FileToUpload.name);
    return this.http.post<any>(endpoint, formData);
    /*.map(() => { return true; })
    .catch((e) => this.handleError(e));*/
  }
/*
  handleError(error: Error) {
    console.error('error: ', error);
 }*/
}
