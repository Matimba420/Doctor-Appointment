import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:3000/api/admin/';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getAdminById(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  addAdmin(admin: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, admin);
  }

  adminLogin(admin: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`, admin)
    
  }

  

}
