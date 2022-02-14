import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:3000/api/doctor';
  

  constructor(private http: HttpClient) { }


  getDoctors(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }
  getAvailableAppointments() : Observable<any>{
    // return this.http.get<any>(`${this.baseUrl}');
    return this.http.get<any>('http://localhost:3000/api/appointments');
  }
}
