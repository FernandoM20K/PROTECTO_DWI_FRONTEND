import { Component, OnInit } from '@angular/core';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-sedes',
  templateUrl: './view-sedes.component.html',
  styleUrls: ['./view-sedes.component.scss']
})
export class ViewSedesComponent implements OnInit {

  sedes:any = [

  ]

  constructor(private sedeService:SedesService) { }

  ngOnInit(): void {
    this.sedeService.listarSedes().subscribe(
      (dato:any) => {
        this.sedes = dato;
        console.log(this.sedes);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Erro al cargar las Sedes','error');
      }
    )
  }

  eliminarSede(sedeId:any) {
    Swal.fire({
      title:'Eliminar Sede',
      text:'¿Estas Seguro de Eliminar la Sede?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.sedeService.eliminarSede(sedeId).subscribe(
          (data:any) => {
            this.sedes = this.sedes.filter((sede:any) => sede.sedeId != sedeId);
            Swal.fire('Sede Eliminada','La Sede ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar la Sede','error')
          }
        );
      }
    })
  }
}
