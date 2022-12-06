import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes/estudiantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-estudiantes',
  templateUrl: './view-estudiantes.component.html',
  styleUrls: ['./view-estudiantes.component.scss']
})
export class ViewEstudiantesComponent implements OnInit {

  estudiantes:any = [

  ]

  estudianteId = 0;

  constructor(
    private estudianteService:EstudiantesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.estudianteId = this.route.snapshot.params['estudianteId'];
    this.estudianteService.listarEstudiantes().subscribe(
      (data:any) => {
        this.estudiantes = data;
        console.log(this.estudiantes);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los estudiantes del salon seleccionado','error');
      }
    )
  }

  eliminarEstudiante(estudianteId:any) {
    Swal.fire({
      title:'Eliminar Estudiante',
      text:'¿Estas Seguro de Eliminar al Estudiante?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.estudianteService.eliminarEstudiante(estudianteId).subscribe(
          (data:any) => {
            this.estudiantes = this.estudiantes.filter((estudiante:any) => estudiante.estudianteId != estudianteId);
            Swal.fire('Estudiante Eliminado','El Estudiante ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar el Estudiante','error')
          }
        );
      }
    })
  }
}
