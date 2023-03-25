import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient ) { }

  login(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.httpClient.post(`${environment.API_URL}api/auth/login`, body)

  }

  isUserLogin() {   
    if(localStorage.getItem("token")){
      return true  
    } else{
      return false
    }
  }

  logOut() {
    localStorage.removeItem("token")
  }
}
