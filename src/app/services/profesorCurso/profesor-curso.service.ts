import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ProfesorCursoService {

  constructor(private http:HttpClient) { }

  public listarProfesoresCurso() {
    return this.http.get(`${baserUrl}/profesorCurso/`);
  }

  public agregarProfesorCurso(profesorCurso:any) {
    return this.http.post(`${baserUrl}/profesorCurso/`,profesorCurso);
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
