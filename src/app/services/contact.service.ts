import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl:string='http://localhost:3006/messages';

  constructor(private httpClient:HttpClient) { }
  addMsg(msg:any){
    return this.httpClient.post(`${this.contactUrl}`, msg);
  }
  getAllMsg() {
    return this.httpClient.get<{ findedMsgs: any }>(this.contactUrl);
  }
}
