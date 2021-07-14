import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriService {
  folowUrl:string='http://localhost:3006/followers';

  constructor(private httpClient:HttpClient) { }
  Follow(data:any){
    return this.httpClient.post(`${this.folowUrl}/follow`, data);
  }

  UnFollow(data:any){
    return this.httpClient.post(`${this.folowUrl}/unfollow`, data);
  }

  GetListFollow(folower:any){
    return this.httpClient.post(`${this.folowUrl}/followersByUser`, folower);
  }

}
