import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  
  private baseUrl = 'http://localhost:3000/api/pets';
  petId : any;
  

  constructor(private http: HttpClient) { }


  getPets(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
    
  }

  setPetId(id: any): void{
    this.petId = id;
  }

  getPetById(id: any): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`, id);
  }



 
}
