import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CombosService {
  private listaDocumento = "api/Combos/ListTipoDocumento";
  private listaPersona = "api/Combos/ListTipoPersona";
  private listaGenero = "api/Combos/ListTipoGenero";
  private listaUsuario = "api/Combos/ListTipoUsuario";
  constructor(private http:HttpClient) { }

  getDocumentos(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.listaDocumento, httOptions)
  }
  getPersona(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.listaPersona, httOptions)
  }
  getGenero(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.listaGenero, httOptions)
  }
  getusuario(): Observable<any> {
    const httOptions = {
      headers : new HttpHeaders({
            'Content-Type': 'application/json'
      })
    };
    return this.http.get(environment.baseUrl + this.listaUsuario, httOptions)
  }

}
