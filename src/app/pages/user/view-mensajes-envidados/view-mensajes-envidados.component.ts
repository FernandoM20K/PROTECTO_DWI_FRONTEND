import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-mensajes-envidados',
  templateUrl: './view-mensajes-envidados.component.html',
  styleUrls: ['./view-mensajes-envidados.component.scss']
})
export class ViewMensajesEnvidadosComponent implements OnInit {

  mensajesEnviados:any;
  usuarioId = 0

  constructor(
    private mensajeService:MensajesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];

    this.mensajeService.listarMensajesEnviadosXUsuario(this.usuarioId).subscribe(
      (data:any) => {
        this.mensajesEnviados = data;
        console.log(this.mensajesEnviados);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al Cargar Los Mensajes Enviados','error')
      }
    )
  }

}
