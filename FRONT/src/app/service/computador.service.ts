import { Computador } from '../models/Computador';

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  private baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  // //----------------------------------------------------------- Administrativo ----------------------------------------------------------------------------------------------------
  cadastrar(computador: Computador): Observable<Computador>{
    return this.http.post<Computador>(`${this.baseURL}computador/cadastrar`, computador);
  }
  listar(): Observable<Computador[]>{
    return this.http.get<Computador[]>(`${this.baseURL}computador/listar`);
  }
  remover(idComputador:string): Observable<Computador> {
    return this.http.delete<Computador>(`${this.baseURL}computador/remover/${idComputador}`);
  }

   
}