import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  public añadirUsuario(user:any) {
    return this.http.post(`${baserUrl}/usuarios/`,user)
  }

}

