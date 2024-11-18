import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReqIngresar } from '../models/IReqIngresar.interface';
import { Observable } from 'rxjs';
import { IResIngresar } from '../models/IResIngresar.interface';
import { IReqRegistro } from '../models/IReqRegistro.interface';
import { IResRegistro } from '../models/IResRegistro.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlEndpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  ingresar(datos: IReqIngresar):Observable<IResIngresar> {
    let url = `${this.urlEndpoint}/user/login`;
    return this.http.post<IResIngresar>(url, datos)
  }

  registrar(datos: IReqRegistro):Observable<IResRegistro> {
    let url = `${this.urlEndpoint}/user/register`;
    return this.http.post<IResRegistro>(url, datos)
  }

}
