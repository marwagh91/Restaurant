import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefUrl:string='http://localhost:3006/chefs';

  constructor(private httpClient:HttpClient) { }
  getAllChef() {
    return this.httpClient.get<{ findedChefs: any }>(this.chefUrl);
  }
  getChefByRole(user:any){
    return this.httpClient.get<{searchedPlats:any }>(`${this.chefUrl}/chefs/${user.role}`);

  }
  // getPlatById(id) {
  //   return this.httpClient.get<{ findedplatsByChef: any }>(`${this.chefUrl}/${id}`);
  // }

}
