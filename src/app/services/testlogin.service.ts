import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestloginService {
  private isLogin : BehaviorSubject<boolean>   ;


  constructor(private httpClient:HttpClient ) { 
    this.isLogin = new BehaviorSubject <boolean> (this.isUserLogged)
  }
  Login(userEmail: string, password: string):Observable<any>
  {

    return this.httpClient.post(`${environment.baseUrl}/users/signin`,{
      "type": "admin",
      "client": "parent11",
      "email": userEmail,
      "password": password
  })
  }

  Logout()
  {
    localStorage.removeItem("token") ;
    localStorage.removeItem("UserName")
  }
  
  saveUserToken(response:any)
  {
    console.log(response.server_response)
    if(response.server_response.credentials.access_token)
    {
      localStorage.setItem("token", response.server_response.credentials.access_token);
      localStorage.setItem("photo_path", response.server_response.message.photo_path)
      localStorage.setItem("name", response.server_response.message.name)
    }
  }
  get isUserLogged():boolean
  {
    return (localStorage.getItem('token'))? true: false ;
  }

}
