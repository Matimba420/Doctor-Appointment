import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api/client/';

  constructor(private http: HttpClient) { }

  //create a user
  addUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, user);
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

  userLogin(user: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`, user)
    
  }

  removeUserById(id:any):Observable<any>{
    return this.http.delete<any[]>(`${this.baseUrl}${id}`);
  }

  getClientAppointments(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/appointments/client/${id}`)
  }

  cancelAppointment(id:any):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/api/appointments/cancelAppointment/${id}`,'')
  }



  // getUserProfile(token : any) : Observable<any> {
  //   return this.http.post<any>(this.baseUrl, token, { 
  //      headers: new HttpHeaders({
  //        'Authorization': `Bearer ${token}`
  //      })
  //    });
  //  }

  

 
    
  }


  





