import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewSedesComponent } from './pages/admin/view-sedes/view-sedes.component';
import { ViewCursosComponent } from './pages/admin/view-cursos/view-cursos.component';
import { AddSedeComponent } from './pages/admin/add-sede/add-sede.component';
import { UpdateSedeComponent } from './pages/admin/update-sede/update-sede.component';
import { ViewProfesoresComponent } from './pages/admin/view-profesores/view-profesores.component';
import { AddProfesorComponent } from './pages/admin/add-profesor/add-profesor.component';
import { UpdateProfesorComponent } from './pages/admin/update-profesor/update-profesor.component';
import { ViewEstudiantesComponent } from './pages/admin/view-estudiantes/view-estudiantes.component';
import { AddEstudianteComponent } from './pages/admin/add-estudiante/add-estudiante.component';
import { UpdateEstudianteComponent } from './pages/admin/update-estudiante/update-estudiante.component';
import { AddCursoComponent } from './pages/admin/add-curso/add-curso.component';
import { UpdateCursoComponent } from './pages/admin/update-curso/update-curso.component';
import { ViewProfesoresXsedeComponent } from './pages/admin/view-profesores-xsede/view-profesores-xsede.component';
import { ViewSalonesComponent } from './pages/admin/view-salones/view-salones.component';
import { AddSalonComponent } from './pages/admin/add-salon/add-salon.component';
import { UpdateSalonComponent } from './pages/admin/update-salon/update-salon.component';
import { ViewSalonesXsedeComponent } from './pages/admin/view-salones-xsede/view-salones-xsede.component';
import { CardIndexComponent } from './components/card-index/card-index.component';
import { IndexComponent } from './pages/home/index/index.component';
import { NosotrosComponent } from './pages/home/nosotros/nosotros.component';
import { ContactoComponent } from './pages/home/contacto/contacto.component';
import { ViewEstudiantesXsedeComponent } from './pages/admin/view-estudiantes-xsede/view-estudiantes-xsede.component';
import { AddProfesorCursoComponent } from './pages/admin/add-profesor-curso/add-profesor-curso.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authInterceptorProviders } from './services/login/auth.interceptor';
import { ViewEstudiantesXApoderadoComponent } from './pages/user/view-estudiantes-x-apoderado/view-estudiantes-x-apoderado.component';
import { ViewNotasXEstudianteComponent } from './pages/user/view-notas-x-estudiante/view-notas-x-estudiante.component';
import { DashboardUserComponent } from './pages/user/dashboard-user/dashboard-user.component';
import { SidebarUserComponent } from './pages/user/sidebar-user/sidebar-user.component';
import { ViewCursosXEstudianteComponent } from './pages/user/view-cursos-x-estudiante/view-cursos-x-estudiante.component';
import { ViewMensajesRecibidosComponent } from './pages/user/view-mensajes-recibidos/view-mensajes-recibidos.component';
import { ViewMensajesEnvidadosComponent } from './pages/user/view-mensajes-envidados/view-mensajes-envidados.component';
import { RedactarMensajeComponent } from './pages/user/redactar-mensaje/redactar-mensaje.component';
import { ViewMensajeComponent } from './pages/user/view-mensaje/view-mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarruselComponent,
    SidebarComponent,
    ViewCategoriasComponent,
    AddCategoriaComponent,
    ViewProductosComponent,
    AddProductoComponent,
    DashboardComponent,
    ViewSedesComponent,
    ViewCursosComponent,
    AddSedeComponent,
    UpdateSedeComponent,
    ViewProfesoresComponent,
    AddProfesorComponent,
    UpdateProfesorComponent,
    ViewEstudiantesComponent,
    AddEstudianteComponent,
    UpdateEstudianteComponent,
    AddCursoComponent,
    UpdateCursoComponent,
    ViewProfesoresXsedeComponent,
    ViewSalonesComponent,
    AddSalonComponent,
    UpdateSalonComponent,
    ViewSalonesXsedeComponent,
    CardIndexComponent,
    IndexComponent,
    NosotrosComponent,
    ContactoComponent,
    ViewEstudiantesXsedeComponent,
    AddProfesorCursoComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    ViewEstudiantesXApoderadoComponent,
    ViewNotasXEstudianteComponent,
    DashboardUserComponent,
    SidebarUserComponent,
    ViewCursosXEstudianteComponent,
    ViewMensajesRecibidosComponent,
    ViewMensajesEnvidadosComponent,
    RedactarMensajeComponent,
    ViewMensajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
