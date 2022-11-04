import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  constructor(private http:HttpClient) { }

  public listarSedes() {
    return this.http.get(`${baserUrl}/sede/`);
  }

  public agregarSede(sede:any) {
    return this.http.post(`${baserUrl}/sede/`,sede);
  }

  public obtenerSede(sedeId:any) {
    return this.http.get(`${baserUrl}/sede/${sedeId}`);
  }

  public actualizarSede(sede:any) {
    return this.http.put(`${baserUrl}/sede/`,sede);
  }

  public eliminarSede(sedeId:any) {
    return this.http.delete(`${baserUrl}/sede/${sedeId}`);
  }
}
