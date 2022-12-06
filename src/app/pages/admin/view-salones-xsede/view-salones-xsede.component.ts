import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonesService } from 'src/app/services/salones/salones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-salones-xsede',
  templateUrl: './view-salones-xsede.component.html',
  styleUrls: ['./view-salones-xsede.component.scss']
})
export class ViewSalonesXsedeComponent implements OnInit {

  salones:any = [

  ];

  sedeId = 0;

  constructor(
    private salonService:SalonesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sedeId = this.route.snapshot.params['sedeId'];
    this.salonService.listarSalonesXsede(this.sedeId).subscribe(
      (data:any) => {
        this.salones = data;
        console.log(this.salones);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los salones de la sede seleccionada','error');
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
