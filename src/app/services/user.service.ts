import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3006/users';

  constructor( private httpClient:HttpClient) { }
  addUser(user:any, avatar:File){
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('confirmPassword', user.confirmPassword);
    formData.append('tel', user.tel);
    formData.append('role', user.role);
    formData.append('avatar', avatar);
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`, formData);
  }
  getUserByRole() {
    return this.httpClient.get<{ findedRoles: any }>(`${this.userUrl}`);
  }
  getChefByRole(){
    return this.httpClient.get<{findedChefs:any }>(`${this.userUrl}/chef`);

  } 
  login(user){
    return this.httpClient.post<{message:string, user:any}>(`${this.userUrl}/login`, user);


  }
  getAllUser() {
    return this.httpClient.get<{ findedUsers: any }>(this.userUrl);
  }
  getAllChef() {
    return this.httpClient.get<{ findedChefs: any }>(this.userUrl);
  }
  deleteChef(id){
    return this.httpClient.delete<{ message: string }>(`${this.userUrl}/${id}`);

  }
  deleteUser(id){
    return this.httpClient.delete<{ message: string }>(`${this.userUrl}/${id}`);

  }
}
