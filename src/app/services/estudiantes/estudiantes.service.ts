import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http:HttpClient) { }

  public listarEstudiantes() {
    return this.http.get(`${baserUrl}/estudiante/`);
  }

  public agregarEstudiante(estudiante:any) {
    return this.http.post(`${baserUrl}/estudiante/`,estudiante);
  }

  public eliminarEstudiante(estudianteId:any) {
    return this.http.delete(`${baserUrl}/estudiante/${estudianteId}`);
  }

  public obtenerEstudiante(estudianteId:any) {
    return this.http.get(`${baserUrl}/estudiante/${estudianteId}`);
  }

  public actualizarEstudiante(estudiante:any) {
    return this.http.put(`${baserUrl}/estudiante/`,estudiante);
  }
}
