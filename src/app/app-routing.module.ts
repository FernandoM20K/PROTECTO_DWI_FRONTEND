import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddCursoComponent } from './pages/admin/add-curso/add-curso.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { AddProfesorComponent } from './pages/admin/add-profesor/add-profesor.component';
import { AddSedeComponent } from './pages/admin/add-sede/add-sede.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateCursoComponent } from './pages/admin/update-curso/update-curso.component';
import { UpdateProfesorComponent } from './pages/admin/update-profesor/update-profesor.component';
import { UpdateSedeComponent } from './pages/admin/update-sede/update-sede.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { ViewCursosComponent } from './pages/admin/view-cursos/view-cursos.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProfesoresComponent } from './pages/admin/view-profesores/view-profesores.component';
import { ViewSedesComponent } from './pages/admin/view-sedes/view-sedes.component';

const routes: Routes = [
  {
    path : 'admin',
    component : DashboardComponent,
    children : [
      {
        path : 'categorias',
        component : ViewCategoriasComponent
      },
      {
        path : 'add-categoria',
        component : AddCategoriaComponent
      },
      {
        path : 'productos',
        component : ViewProductosComponent
      },
      {
        path : 'add-producto',
        component : AddProductoComponent
      },
      {
        path : 'sedes',
        component : ViewSedesComponent
      },
      {
        path : 'add-sede',
        component : AddSedeComponent
      },
      {
        path : 'sedes/:sedeId',
        component : UpdateSedeComponent
      },
      {
        path : 'profesores',
        component : ViewProfesoresComponent
      },
      {
        path : 'add-profesor',
        component : AddProfesorComponent
      },
      {
        path : 'profesores/:profesorId',
        component : UpdateProfesorComponent
      },
      {
        path : 'cursos',
        component : ViewCursosComponent
      },
      {
        path : 'add-curso',
        component : AddCursoComponent
      },
      {
        path : 'cursos/:cursoId',
        component : UpdateCursoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
