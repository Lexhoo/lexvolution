import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpreq:HttpClient) { }

  sendMessage(){
    let body = {
      body : "le body on teste"
    }
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json',
      })
    }
    return this.httpreq.post("http://localhost:5000/mail",body,headers);
  }
}
