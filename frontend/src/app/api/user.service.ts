import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api/client/';

  constructor(private http: HttpClient) { }

  //create a user
  addUser(user: any): Observable<any>{
    return this.http.post(this.baseUrl, user);
  }

  //read user
  getUsers(): Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  //read user by id
  getUser(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  //update
  updateUser(user: any, id: any): Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/${id}`, user)
  }

  




}
