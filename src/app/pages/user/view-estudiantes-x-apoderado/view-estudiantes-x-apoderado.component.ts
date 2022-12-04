import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes/estudiantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-estudiantes-x-apoderado',
  templateUrl: './view-estudiantes-x-apoderado.component.html',
  styleUrls: ['./view-estudiantes-x-apoderado.component.scss']
})
export class ViewEstudiantesXApoderadoComponent implements OnInit {

  estudiantes:any = [

  ];

  usuarioId = 0;

  constructor(
    private estudianteService:EstudiantesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['apoderadoId'];
    this.estudianteService.listarEstudiantesXApoderado(this.usuarioId).subscribe(
      (data:any) => {
        this.estudiantes = data;
        console.log(this.estudiantes);
      }, (error) => {
        Swal.fire('Error !!','Error al Cargar Los Estudiantes','error')
        console.log(error);
      }
    )
  }

}
