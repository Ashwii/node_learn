import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL: string;
  constructor(public http: HttpClient) { }

  getList = (partialUrl: string): Observable<any> => {
    return this.http.get(`${this.API_URL}${partialUrl}`);
  }
  postData = (partialUrl: any, obj): Observable<any> => {
    return this.http.post(`${this.API_URL}${partialUrl}`, obj);
  }
  getData = (partialUrl: any, id: number): Observable<any> => {
    return this.http.get(`${this.API_URL}${partialUrl}/${id}`);
  }
  updateData = (partialUrl: any, obj): Observable<any> => {
    return this.http.put(`${this.API_URL}${partialUrl}`, obj);
  }
  deleteData = (partialUrl: any, id: number): Observable<any> => {
    return this.http.delete(`${this.API_URL}${partialUrl}/${id}`);
  }
  statusChange = (partialUrl: any, id: number): Observable<any> => {
    return this.http.delete(`${this.API_URL}${partialUrl}/${id}`);
  }
}
