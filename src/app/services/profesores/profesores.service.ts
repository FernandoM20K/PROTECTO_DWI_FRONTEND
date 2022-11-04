import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http:HttpClient) { }

  public listarProfesores() {
    return this.http.get(`${baserUrl}/profesor/`);
  }

  public agregarProfesor(profesor:any) {
    return this.http.post(`${baserUrl}/profesor/`,profesor);
  }

  public obtenerProfesor(profesorId:any) {
    return this.http.get(`${baserUrl}/profesor/${profesorId}`);
  }

  public actualizarProfesor(profesor:any) {
    return this.http.put(`${baserUrl}/profesor/`,profesor);
  }

  public eliminarProfesor(profesorId:any) {
    return this.http.delete(`${baserUrl}/profesor/${profesorId}`);
  }
}
