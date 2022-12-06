import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SalonesService } from 'src/app/services/salones/salones.service';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-salon',
  templateUrl: './add-salon.component.html',
  styleUrls: ['./add-salon.component.scss']
})
export class AddSalonComponent implements OnInit {

  sedes:any = [

  ]

  salon = {
    grado : '',
    seccion : '',
    sede : {
      sedeId : ''
    }
  }

  constructor(
    private salonService:SalonesService,
    private snack:MatSnackBar,
    private sedeService:SedesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sedeService.listarSedes().subscribe(
      (data:any) => {
        this.sedes = data;
        console.log(this.sedes);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar las Sedes','error');
      }
    )
  }

  guardarSalon() {
    console.log(this.salon);
    if(this.salon.seccion.trim() == '' || this.salon.seccion == null) {
      this.snack.open('El Nombre del salon es requerido','',{
        duration:3000
      });
      return;
    }

    this.salonService.agregarSalon(this.salon).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Salon Guardado','El salon ha sido guardado con exito','success');
        this.salon = {
          grado : '',
          seccion : '',
          sede : {
            sedeId : ''
          }
        }
        this.router.navigate(['/admin/salones']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar el Salon','error');
      }
    )
  }
}
