import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }



  initOrder(data:any) {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("token", localStorage.getItem("token") || "")

    return this.httpClient.post(`${environment.API_URL}api/order/initOrder`, data, {headers: headers})
  }

  getOrders() {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("token", localStorage.getItem("token") || "")

    return this.httpClient.get(`${environment.API_URL}api/order/myorders`, {headers: headers})
  }

}
