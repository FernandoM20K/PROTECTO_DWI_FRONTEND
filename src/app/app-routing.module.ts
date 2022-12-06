import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddCursoComponent } from './pages/admin/add-curso/add-curso.component';
import { AddEstudianteComponent } from './pages/admin/add-estudiante/add-estudiante.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { AddProfesorCursoComponent } from './pages/admin/add-profesor-curso/add-profesor-curso.component';
import { AddProfesorComponent } from './pages/admin/add-profesor/add-profesor.component';
import { AddSalonComponent } from './pages/admin/add-salon/add-salon.component';
import { AddSedeComponent } from './pages/admin/add-sede/add-sede.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateCursoComponent } from './pages/admin/update-curso/update-curso.component';
import { UpdateProfesorComponent } from './pages/admin/update-profesor/update-profesor.component';
import { UpdateSalonComponent } from './pages/admin/update-salon/update-salon.component';
import { UpdateSedeComponent } from './pages/admin/update-sede/update-sede.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { ViewCursosComponent } from './pages/admin/view-cursos/view-cursos.component';
import { ViewEstudiantesXsedeComponent } from './pages/admin/view-estudiantes-xsede/view-estudiantes-xsede.component';
import { ViewEstudiantesComponent } from './pages/admin/view-estudiantes/view-estudiantes.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProfesoresXsedeComponent } from './pages/admin/view-profesores-xsede/view-profesores-xsede.component';
import { ViewProfesoresComponent } from './pages/admin/view-profesores/view-profesores.component';
import { ViewSalonesXsedeComponent } from './pages/admin/view-salones-xsede/view-salones-xsede.component';
import { ViewSalonesComponent } from './pages/admin/view-salones/view-salones.component';
import { ViewSedesComponent } from './pages/admin/view-sedes/view-sedes.component';
import { IndexComponent } from './pages/home/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import { RedactarMensajeComponent } from './pages/user/redactar-mensaje/redactar-mensaje.component';
import { ViewCursosXEstudianteComponent } from './pages/user/view-cursos-x-estudiante/view-cursos-x-estudiante.component';
import { ViewEstudiantesXApoderadoComponent } from './pages/user/view-estudiantes-x-apoderado/view-estudiantes-x-apoderado.component';
import { ViewMensajesEnvidadosComponent } from './pages/user/view-mensajes-envidados/view-mensajes-envidados.component';
import { ViewMensajesRecibidosComponent } from './pages/user/view-mensajes-recibidos/view-mensajes-recibidos.component';
import { ViewNotasXEstudianteComponent } from './pages/user/view-notas-x-estudiante/view-notas-x-estudiante.component';
import { AdminGuard } from './services/login/admin.guard';
import { NormalGuard } from './services/login/normal.guard';

const routes: Routes = [
  {
    path : 'inicio',
    component : IndexComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'admin',
    component : DashboardComponent,
    canActivate : [AdminGuard],
    children : [
      {
        path : 'profile',
        component : ProfileComponent
      },
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
        path : 'profesores/sede/:sedeId',
        component : ViewProfesoresXsedeComponent
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
      {
        path : 'salones',
        component : ViewSalonesComponent
      },
      {
        path : 'salones/sede/:sedeId',
        component : ViewSalonesXsedeComponent
      },
      {
        path : 'add-salon',
        component : AddSalonComponent
      },
      {
        path : 'salones/:salonId',
        component : UpdateSalonComponent
      },
      {
        path : 'add-profesorCurso',
        component : AddProfesorCursoComponent
      },
      {
        path : 'estudiantes',
        component : ViewEstudiantesComponent
      },
      {
        path : 'estudiantes/salon/:salonId',
        component : ViewEstudiantesXsedeComponent //MODIFICAR
      },
      {
        path : 'add-estudiante',
        component : AddEstudianteComponent
      },
    ]
  },
  {
    path : 'user',
    component : DashboardUserComponent,
    canActivate : [NormalGuard],
    children : [ 
      {
        path : 'estudiantes/apoderado/:apoderadoId',
        component : ViewEstudiantesXApoderadoComponent //MODIFICAR
      },
      {
        path : 'estudiantes/cursos/:estudianteId',
        component : ViewCursosXEstudianteComponent
      },
      {
        path : 'estudiantes/cursos/:profesorCursoId/estudiante/:estudianteId',
        component : ViewNotasXEstudianteComponent
      },
      {
        path : 'mensajes/recibidos/:usuarioId',
        component : ViewMensajesRecibidosComponent
      },
      {
        path : 'mensajes/enviados/:usuarioId',
        component : ViewMensajesEnvidadosComponent
      },
      {
        path : 'mensaje/redactar/:usuarioId',
        component : RedactarMensajeComponent
      },
      {
        path : 'mensaje/view/:mensajeId',
        component : RedactarMensajeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
