import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotasService } from 'src/app/services/notas/notas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-notas-x-estudiante',
  templateUrl: './view-notas-x-estudiante.component.html',
  styleUrls: ['./view-notas-x-estudiante.component.scss']
})
export class ViewNotasXEstudianteComponent implements OnInit {

  estudianteCurso:any;
  estudianteId = 0;
  profesorCursoId = 0;

  constructor(
    private notaService:NotasService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.estudianteId = this.route.snapshot.params['estudianteId'];
    this.profesorCursoId = this.route.snapshot.params['profesorCursoId'];
    
    this.notaService.listarNotaXEstudianteAndCurso(this.estudianteId, this.profesorCursoId).subscribe(
      (data:any) => {
        this.estudianteCurso = data;
        console.log(this.estudianteCurso);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al Cargar Las notas del Estudiante','error')
      }
    )
  }

}
