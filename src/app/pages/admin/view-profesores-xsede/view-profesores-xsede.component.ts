import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-profesores-xsede',
  templateUrl: './view-profesores-xsede.component.html',
  styleUrls: ['./view-profesores-xsede.component.scss']
})
export class ViewProfesoresXsedeComponent implements OnInit {

  profesores:any = [

  ]

  profesorId = 0;

  constructor(
    private profesorService:ProfesoresService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.profesorId = this.route.snapshot.params['profesorId'];
    this.profesorService.listarProfesoresXsede(this.profesorId).subscribe(
      (data:any) => {
        this.profesores = data;
        console.log(this.profesores);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los profesores de la sede seleccionada','error');
      }
    )
  }

  eliminarProfesor(profesorId:any) {
    Swal.fire({
      title:'Eliminar Profesor',
      text:'¿Estas Seguro de Eliminar al profesor?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.profesorService.eliminarProfesor(profesorId).subscribe(
          (data:any) => {
            this.profesores = this.profesores.filter((profesor:any) => profesor.profesorId != profesorId);
            Swal.fire('Profesor Eliminado','El profesor ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar el profesor','error')
          }
        );
      }
    })
  }
}
