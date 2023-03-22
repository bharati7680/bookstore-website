import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  constructor(private httpService:HttpClient) { }

  
  //booklist

  booklist():Observable<any>
  {
    return this.httpService.get(`${environment.API_URL}api/book`);
  }

  //bookdetails
  bookDetail(isbn_13:any):Observable<any> {
    return this.httpService.get(`${environment.API_URL}api/book/detail/${isbn_13}`)
  }
  

}
