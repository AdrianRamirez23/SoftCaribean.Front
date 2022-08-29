import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from './Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private createpersona = "api/Personas/CreatePersonas";
  private listpersona = "api/Personas/GetPersonas";
  private updatepersona = "api/Personas/UpdatePersonas";

  constructor(private http:HttpClient) { }

  getpersonas(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.listpersona, httOptions)
  }
  createpersonas(persona: Persona): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.baseUrl + this.createpersona, persona,httOptions)
  }updatepersonas(persona: Persona): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.put(environment.baseUrl + this.updatepersona, persona,httOptions)
  }
}
