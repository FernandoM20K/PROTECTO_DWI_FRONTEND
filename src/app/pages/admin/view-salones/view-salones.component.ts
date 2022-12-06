import { Component, OnInit } from '@angular/core';
import { SalonesService } from 'src/app/services/salones/salones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-salones',
  templateUrl: './view-salones.component.html',
  styleUrls: ['./view-salones.component.scss']
})
export class ViewSalonesComponent implements OnInit {

  salones:any = [

  ];

  constructor(private salonService:SalonesService) { }

  ngOnInit(): void {
    this.salonService.listarSalones().subscribe(
      (dato:any) => {
        this.salones = dato;
        console.log(this.salones);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Erro al cargar los salones','error');
      }
    )
  }

  eliminarSalon(salonId:any) {
    Swal.fire({
      title:'Eliminar Salon',
      text:'¿Estas Seguro de Eliminar el Salon?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed) {
        this.salonService.eliminarSalon(salonId).subscribe(
          (data:any) => {
            this.salones = this.salones.filter((salon:any) => salon.salonId != salonId);
            Swal.fire('Salon Eliminado','El Salon ha sido eliminado con exito','success');
          }, (error) => {
            Swal.fire('Error !!','Error al eliminar el Salon','error')
          }
        );
      }
    })
  }
}
