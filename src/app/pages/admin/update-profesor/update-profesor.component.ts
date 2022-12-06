import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profesor',
  templateUrl: './update-profesor.component.html',
  styleUrls: ['./update-profesor.component.scss']
})
export class UpdateProfesorComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private profesorService:ProfesoresService,
    private router:Router
  ) { }

  profesorId = 0;
  profesor:any;

  ngOnInit(): void {
    this.profesorId = this.route.snapshot.params['profesorId'];
    this.profesorService.obtenerProfesor(this.profesorId).subscribe(
      (data) => {
        this.profesor = data;
        console.log(this.profesor);
      }, (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los profesores de la sede Seleccionada','error');
      }
    )
  }

  public actualizarProfesor() {
    this.profesorService.actualizarProfesor(this.profesor).subscribe(
      (data) => {
        Swal.fire('Profesor Actualizado','El profesor ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/profesores']);
          }
        );
      }, (error) => {
        Swal.fire('Error !!','No se ha podido actualizar el profesor','error');
        console.log(error);
      }
    )
  }
}
