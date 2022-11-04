import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-cursos',
  templateUrl: './view-cursos.component.html',
  styleUrls: ['./view-cursos.component.scss']
})
export class ViewCursosComponent implements OnInit {

  cursos:any = [

  ];

  constructor(private cursoService:CursosService) { }

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(
      (dato:any) => {
        this.cursos = dato;
        console.log(this.cursos);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Erro al cargar los cursos','error');
      }
    )
  }

  eliminarCurso(cursoId:any) {
    Swal.fire({
      title:'Eliminar Curso',
      text:'¿Estas Seguro de Eliminar el curso?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.cursoService.eliminarCurso(cursoId).subscribe(
          (data:any) => {
            this.cursos = this.cursos.filter((curso:any) => curso.examenId != cursoId);
            Swal.fire('Curso Eliminado','El curso ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar el curso','error')
          }
        );
      }
    })
  }
}
