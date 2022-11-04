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
    UpdateCursoComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
