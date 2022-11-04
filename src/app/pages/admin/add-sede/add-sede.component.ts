import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-sede',
  templateUrl: './add-sede.component.html',
  styleUrls: ['./add-sede.component.scss']
})
export class AddSedeComponent implements OnInit {

  sede = {
    nombre : '',
    direccion : '',
    telefono : ''
  }

  constructor(
    private sedeService:SedesService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  guardarSede() {
    console.log(this.sede);
    if(this.sede.nombre.trim() == '' || this.sede.nombre == null) {
      this.snack.open('El Nombre de la sede es requerido','',{
        duration:3000
      });
      return;
    }

    this.sedeService.agregarSede(this.sede).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Sede Guardada','La Sede ha sido guardada con exito','success');
        this.sede = {
          nombre : '',
          direccion : '',
          telefono : ''
        }
        this.router.navigate(['/admin/sedes']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar la Sede','error');
      }
    )
  }
}
