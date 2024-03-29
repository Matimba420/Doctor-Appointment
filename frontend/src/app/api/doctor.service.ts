import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:3000/api/doctor/';
  

  constructor(private http: HttpClient) { }


  getDoctors(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  addDoctor(doctor: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, doctor);
  }

  getAvailableAppointments() : Observable<any>{
    // return this.http.get<any>(`${this.baseUrl}');
    return this.http.get<any>('http://localhost:3000/api/appointments');
  }

  doctorLogin(user: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}login`, user)
    
  }

  removeDoctorById(id:any):Observable<any>{
    return this.http.delete<any[]>(`${this.baseUrl}${id}`);
  }

  getDoctorById(id:any):Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}${id}`);
  }

  getPetAndDocInfo(data:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/pets/name/${data}`);
  }

  getAvailableAppointmentsByDrId(id: any):Observable<any>{
    return this.http.get<any[]>(`http://localhost:3000/api/appointments/avail/${id}`);
  }

  makeAppointment(id: any, data: any): Observable<any>{
    return this.http.put<any>(`http://localhost:3000/api/appointments/makeAppointment/${id}`, data)
  
}

cancelDrAppointment(id:any):Observable<any>{
  return this.http.put<any>(`http://localhost:3000/api/appointments/cancelDrAppointment/${id}`,'')
}

getBookedAppointmentsBydrId(id:any):Observable<any>{
  return this.http.get<any>(`http://localhost:3000/api/appointments/booked/${id}`);
}



  getAppointments(){
    return this.http.get<any>('http://localhost:3000/api/appointments/');
  }

  removeAppointment(id:any):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/api/appointments/remove/${id}`,'');
  }

  newAppointment(body:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/appointments', body)

  }

  


  
  




  



}
