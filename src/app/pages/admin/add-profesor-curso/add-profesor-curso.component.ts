import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { ProfesorCursoService } from 'src/app/services/profesorCurso/profesor-curso.service';
import { ProfesoresService } from 'src/app/services/profesores/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-profesor-curso',
  templateUrl: './add-profesor-curso.component.html',
  styleUrls: ['./add-profesor-curso.component.scss']
})
export class AddProfesorCursoComponent implements OnInit {

  cursos:any = [

  ];

  profesores:any = [

  ];

  profesorCurso = {
    profesor : {
      profesorId: ''
    },
    curso : {
      cursoId : ''
    }
  }

  constructor(
    private cursoService:CursosService,
    private profesorService:ProfesoresService,
    private profesorCursoService:ProfesorCursoService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(
      (data:any) => {
        this.cursos = data;
      }, (error) => {
        Swal.fire('Error !!','Error al cargar los cursos','error');
      }
    )

    this.profesorService.listarProfesores().subscribe(
      (data:any) => {
        this.profesores = data;
      }, (error) => {
        Swal.fire('Error !!','Error al cargar los profesores','error')
      }
    )
  }

  guardarProfesorCurso() {
    this.profesorCursoService.agregarProfesorCurso(this.profesorCurso).subscribe(
      (data) => {
        Swal.fire('Asiugnacion Completada','El profesor ha sido asignado a un curso con exito','success')
        this.profesorCurso = {
          profesor : {
            profesorId: ''
          },
          curso : {
            cursoId : ''
          }
        }
        this.router.navigate(['/admin/profesores'])
      }, (error) => {
        Swal.fire('Error !!','Error al guardar los datos de la asignacion de Curso','error')
      }
    )
  }

}
