import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class SalonesService {

  constructor(private http:HttpClient) { }

  public listarSalones() {
    return this.http.get(`${baserUrl}/salon/`);
  }

  public listarSalonesXsede(sedeId:any) {
    return this.http.get(`${baserUrl}/salon/sede/salones/${sedeId}`);
  }

  public agregarSalon(salon:any) {
    return this.http.post(`${baserUrl}/salon/`,salon);
  }

  public obtenerSalon(salonId:any) {
    return this.http.get(`${baserUrl}/salon/${salonId}`);
  }

  public actualizarSalon(salon:any) {
    return this.http.put(`${baserUrl}/salon/`,salon);
  }

  public eliminarSalon(salonId:any) {
    return this.http.delete(`${baserUrl}/salon/${salonId}`);
  }
}
