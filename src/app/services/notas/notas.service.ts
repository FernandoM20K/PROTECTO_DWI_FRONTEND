import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http:HttpClient) { }

  public listarNotas() {
    return this.http.get(`${baserUrl}/nota/`);
  }

  public listarCursosXEstudiante(estudianteId:any) {
    return this.http.get(`${baserUrl}/nota/cursos/${estudianteId}`);
  }

  public agregarNota(estudianteCurso:any) {
    return this.http.post(`${baserUrl}/nota/`,estudianteCurso);
  }

  public eliminarEstudianteCurso(estudianteCursoId:any) {
    return this.http.delete(`${baserUrl}/nota/${estudianteCursoId}`);
  }

  public obtenerEstudianteCurso(estudianteCursoId:any) {
    return this.http.get(`${baserUrl}/nota/${estudianteCursoId}`);
  }

  public actualizarEstudianteCurso(estudianteCurso:any) {
    return this.http.put(`${baserUrl}/nota/`,estudianteCurso);
  }

  public listarNotaXEstudianteAndCurso(estudianteId:any, cursoId:any) {
    return this.http.get(`${baserUrl}/nota/${estudianteId}/${cursoId}`);
  }

}
