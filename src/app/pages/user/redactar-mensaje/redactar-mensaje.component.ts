import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes/mensajes.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-redactar-mensaje',
  templateUrl: './redactar-mensaje.component.html',
  styleUrls: ['./redactar-mensaje.component.scss']
})
export class RedactarMensajeComponent implements OnInit {

  profesores:any =[

  ];

  mensaje = {
    mensaje: '',
    usuarioRecepcion: {
      usuarioId:''
    },
    usuarioEnvio: {
        usuarioId:''
    },
  }

  funcion ='profesor'

  constructor(
    private usuarioService:UsuariosService,
    private mensajeService:MensajesService,
    private snack:MatSnackBar,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mensaje.usuarioEnvio.usuarioId = this.route.snapshot.params['usuarioId']
    this.usuarioService.listarUsuariosXFuncion(this.funcion).subscribe(
      (data:any) => {
        this.profesores = data;
        console.log(this.profesores);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar la lista de Profesores','error')
      }
    )
  }

  guardarProfesor() {
    console.log(this.mensaje);
    this.mensajeService.enviarMensaje(this.mensaje).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Mensaje Enviado','El mensaje ha sido enviado con exito','success');
        this.mensaje = {
          mensaje: '',
          usuarioRecepcion: {
            usuarioId:''
          },
          usuarioEnvio: {
            usuarioId:''
          },
        }
        this.router.navigate(['/user']);
      }, (error) => {
        Swal.fire('Error !!','Error al Enviar el Mensaje','error');
      }
    )
  }

}
