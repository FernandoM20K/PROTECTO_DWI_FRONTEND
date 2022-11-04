import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.scss']
})
export class AddCursoComponent implements OnInit {

  curso = {
    nombre : '',
    horasSemanales : ''
  }

  constructor(
    private cursoService:CursosService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  guardarCurso() {
    console.log(this.curso);
    if(this.curso.nombre.trim() == '' || this.curso.nombre == null) {
      this.snack.open('El Nombre del curso es requerido','',{
        duration:3000
      });
      return;
    }

    this.cursoService.agregarCurso(this.curso).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Curso Guardado','El curso ha sido guardado con exito','success');
        this.curso = {
          nombre : '',
          horasSemanales : ''
        }
        this.router.navigate(['/admin/cursos']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar el Curso','error');
      }
    )
  }
}
