import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-curso',
  templateUrl: './update-curso.component.html',
  styleUrls: ['./update-curso.component.scss']
})
export class UpdateCursoComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private cursoService:CursosService,
    private router:Router,
    private snack:MatSnackBar
  ) { }

  cursoId = 0;
  curso:any;

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.cursoService.obtenerCurso(this.cursoId).subscribe(
      (data) => {
        this.curso = data;
        console.log(this.curso);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public actualizarCurso() {
    if(this.curso.nombre.trim() == '' || this.curso.nombre == null) {
      this.snack.open('El Nombre del curso es requerido','',{
        duration:3000
      });
      return;
    }
    
    this.cursoService.actualizarCurso(this.curso).subscribe(
      (data) => {
        Swal.fire('Curso Actualizado','El curso ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/cursos']);
          }
        );
      }, (error) => {
        Swal.fire('Error !!','No se ha podido actualizar el Curso','error');
        console.log(error);
      }
    )
  }
}
