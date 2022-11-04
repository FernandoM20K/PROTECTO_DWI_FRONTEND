import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SedesService } from 'src/app/services/sedes/sedes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-sede',
  templateUrl: './update-sede.component.html',
  styleUrls: ['./update-sede.component.scss']
})
export class UpdateSedeComponent implements OnInit {

  sedeId = 0;
  sede:any;

  constructor(
    private route:ActivatedRoute,
    private sedeService:SedesService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sedeId = this.route.snapshot.params['sedeId'];
    this.sedeService.obtenerSede(this.sedeId).subscribe(
      (data) => {
        this.sede = data;
        console.log(this.sede);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public actualizarSede() {
    this.sedeService.actualizarSede(this.sede).subscribe(
      (data) => {
        Swal.fire('Sede Actualizada','La Sede ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/sedes']);
          }
        );
      }, (error) => {
        Swal.fire('Error !!','No se ha podido actualizar la Sede','error');
        console.log(error);
      }
    )
  }
}
