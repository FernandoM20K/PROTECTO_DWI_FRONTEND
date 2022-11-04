import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.scss']
})
export class AddEstudianteComponent implements OnInit {

  sedes:any = [

  ];

  estudiante = {
    nombre: '',
    apellido : '',
    dni : '',
    genero : '',
    direccion : '',
    fechaIngreso : '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
