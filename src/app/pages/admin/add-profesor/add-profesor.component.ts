import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores/profesores.service';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.scss']
})
export class AddProfesorComponent implements OnInit {

  sedes:any = [

  ];

  profesor = {
    nombre : '',
    apellido : '',
    genero : '',
    celular : '',
    dni : '',
    direccion : '',
    email : '',
    sueldo : '',
    estado : '',
    sede : {
      sedeId : ''
    }
  }

  constructor(
    private sedeService:SedesService,
    private profesorService:ProfesoresService,
    private snack:MatSnackBar,
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

  guardarProfesor() {
    console.log(this.profesor);
    if(this.profesor.nombre.trim() == '' || this.profesor.nombre == null) {
      this.snack.open('El Nombre del profesor es requerido','',{
        duration:3000
      });
      return;
    }

    if(this.profesor.apellido.trim() == '' || this.profesor.apellido == null) {
      this.snack.open('El Apellido del profesor es requerido','',{
        duration:3000
      });
      return;
    }

    this.profesorService.agregarProfesor(this.profesor).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Profesor Guardado','El profesor ha sido guardado con exito','success');
        this.profesor = {
          nombre : '',
          apellido : '',
          genero : '',
          celular : '',
          dni : '',
          direccion : '',
          email : '',
          sueldo : '',
          estado : '',
          sede : {
            sedeId : ''
          }
        }
        this.router.navigate(['/admin/profesores']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar el Profesor','error');
      }
    )
  }
}
