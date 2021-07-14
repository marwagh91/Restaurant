import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {
  platUrl:string='http://localhost:3006/plats';
  constructor(private httpClient :HttpClient) { }
  getAllPlat() {
    return this.httpClient.get<{ findedplats: any }>(this.platUrl);
  }


  getPlatById(id) {
    return this.httpClient.get<{ findedplats: any }>(`${this.platUrl}/${id}`);
  }

  deletePlat(id) {
    return this.httpClient.delete<{ message: string }>(`${this.platUrl}/${id}`);

  }

  addPlat(plat:any, img:File) {
    let formData = new FormData();
    formData.append('name', plat.name);
    formData.append('description', plat.description);
    formData.append('price', plat.price);
    formData.append('img', img);
    formData.append('idChef', plat.idChef);

    return this.httpClient.post(this.platUrl, formData);
  }
  editPlat(plat) {
    return this.httpClient.put<{ message: string }>(`${this.platUrl}/${plat._id}`, plat);

  }
  
  searchedByName(plat:any){
    return this.httpClient.get<{searchedPlats:any }>(`${this.platUrl}/search/${plat.name}`);

  }
  getPlatByIdChef(id) {
    return this.httpClient.get<{ findedplatsByChef: any }>(`${this.platUrl}/plats-chef/${id}`);
  }
}
