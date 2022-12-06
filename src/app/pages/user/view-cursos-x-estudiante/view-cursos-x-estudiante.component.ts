import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from 'src/app/services/notas/notas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cursos-x-estudiante',
  templateUrl: './view-cursos-x-estudiante.component.html',
  styleUrls: ['./view-cursos-x-estudiante.component.scss']
})
export class ViewCursosXEstudianteComponent implements OnInit {

  cursosEstudiante:any = [

  ];

  estudianteId = 0;

  constructor(
    private notaService:NotasService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.estudianteId = this.route.snapshot.params['estudianteId'];
    this.notaService.listarCursosXEstudiante(this.estudianteId).subscribe(
      (data:any) => {
        this.cursosEstudiante = data;
        console.log(this.cursosEstudiante);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al Cargar los Cursos del Estudiante Seleccionado','error');
      }
    )
  }

}
