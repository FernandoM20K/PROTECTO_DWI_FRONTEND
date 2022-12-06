import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonesService } from 'src/app/services/salones/salones.service';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-salon',
  templateUrl: './update-salon.component.html',
  styleUrls: ['./update-salon.component.scss']
})
export class UpdateSalonComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private salonService:SalonesService,
    private sedeService:SedesService,
    private router:Router
  ) { }

  salonId = 0;
  salon:any;
  sedes:any;

  ngOnInit(): void {
    this.salonId = this.route.snapshot.params['salonId'];
    this.salonService.obtenerSalon(this.salonId).subscribe(
      (data) => {
        this.salon = data;
        console.log(this.salon);
      },
      (error) => {
        console.log(error);
      }
    );

    this.sedeService.listarSedes().subscribe(
      (data:any) => {
        this.sedes = data;
      }, (error) => {
        console.log(error)
      }
    );
  }

  public actualizarSalon() {
    this.salonService.actualizarSalon(this.salon).subscribe(
      (data) => {
        Swal.fire('Salon Actualizado','El salon ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/salones']);
          }
        );
      }, (error) => {
        Swal.fire('Error !!','No se ha podido actualizar el salon','error');
        console.log(error);
      }
    )
  }
}
