import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes/estudiantes.service';
import { SalonesService } from 'src/app/services/salones/salones.service';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.scss']
})
export class AddEstudianteComponent implements OnInit {

  sedes:any = [

  ];

  salones:any = [

  ];

  estudiante = {
    nombre: '',
    apellido : '',
    dni : '',
    genero : '',
    direccion : '',
    fechaIngreso : '',
    estado : '',
    salon : {
      salonId : ''
    } 
  }

  constructor(
    private sedeService:SedesService,
    private salonesService:SalonesService,
    private estudiantesService:EstudiantesService,
    private snack:MatSnackBar,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sedeService.listarSedes().subscribe(
      (data:any) => {
        this.sedes = data;
      }, (error) => {
        Swal.fire('Error !!', 'Error al cargar las sedes', 'error');
      }
    )

    this.salonesService.listarSalones().subscribe(
      (data:any) => {
        this.salones = data;
      }, (error) => {
        Swal.fire('Error !!','Error al cargar los salones','error');
      }
    )
  }

  listarSalonesXSede(sedeId:number) {
    
  }

  guardarEstudiante() {
    if(this.estudiante.nombre.trim() == '' || this.estudiante.nombre == null) {
      this.snack.open('El Nombre del estudiante es requerido','',{
        duration:3000
      });
      return;
    }

    if(this.estudiante.apellido.trim() == '' || this.estudiante.apellido == null) {
      this.snack.open('El Apellido del estudiante es requerido','',{
        duration:3000
      });
      return;
    }

    this.estudiantesService.agregarEstudiante(this.estudiante).subscribe(
      (data) => {
        Swal.fire('Estudiante Guardado','El estudiante ha sido guardado con exito','success')
        this.estudiante = {
          nombre: '',
          apellido : '',
          dni : '',
          genero : '',
          direccion : '',
          fechaIngreso : '',
          estado : '',
          salon : {
            salonId : ''
          } 
        }
        this.router.navigate(['/admin/estudiantes']);
      }, (error) => {
        Swal.fire('Error !!','Error al guardar el estudiante','error')
      }
    )
  }

}
