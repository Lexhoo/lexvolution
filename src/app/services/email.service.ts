import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../modele/email';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpreq:HttpClient) { }

  send(email: Email){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    const body = {
      from: email.email,
      nom: email.nom,
      text: email.message
    }
    return this.httpreq.post("http://localhost:5000/v1/text-mail", body, headers);
  }
}
