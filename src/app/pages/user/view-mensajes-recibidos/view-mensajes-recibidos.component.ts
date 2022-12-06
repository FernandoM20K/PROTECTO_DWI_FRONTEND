import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-mensajes-recibidos',
  templateUrl: './view-mensajes-recibidos.component.html',
  styleUrls: ['./view-mensajes-recibidos.component.scss']
})
export class ViewMensajesRecibidosComponent implements OnInit {

  mensajesRecibidos:any;
  usuarioId = 0

  constructor(
    private mensajeService:MensajesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];

    this.mensajeService.listarMensajesRecibidosXUsuario(this.usuarioId).subscribe(
      (data:any) => {
        this.mensajesRecibidos = data;
        console.log(this.mensajesRecibidos);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al Cargar Los Mensajes Recibidos','error')
      }
    )
  }

}
