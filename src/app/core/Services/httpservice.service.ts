import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseurl:string="http://localhost:3000/"

  constructor(private http:HttpClient) { 

  }

  postdatatoserver(endpoint:string,body:any){
    const url = this.baseurl + endpoint;
    return this.http.post(url,body)
  }

  getDataFromServer(endpoint:string){
    const url =this.baseurl + endpoint;
    return this.http.get(url)
  }
}
