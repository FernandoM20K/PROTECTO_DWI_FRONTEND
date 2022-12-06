import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  public listarMensajes() {
    return this.http.get(`${baserUrl}/mensaje/`);
  }

  public listarMensajesRecibidosXUsuario(usuarioId:any) {
    return this.http.get(`${baserUrl}/mensaje/recibidos/${usuarioId}`);
  }

  public listarMensajesEnviadosXUsuario(usuarioId:any) {
    return this.http.get(`${baserUrl}/mensaje/enviados/${usuarioId}`);
  }

  public enviarMensaje(mensaje:any) {
    return this.http.post(`${baserUrl}/mensaje/`,mensaje);
  }

}
