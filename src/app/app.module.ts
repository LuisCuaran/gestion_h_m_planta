import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './etructura/header/header.component';
import { NavComponent } from './etructura/nav/nav.component';
import { FooterComponent } from './etructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { RegistrosComponent } from './modulos/registros/registros.component';
import { ProcedimientosComponent } from './modulos/procedimientos/procedimientos.component';
import { ProveedorComponent } from './modulos/proveedor/proveedor.component';
import { CategoriaComponent } from './modulos/categoria/categoria.component';
import { HerramientasComponent } from './modulos/herramientas/herramientas.component';
import { InventarioComponent } from './modulos/inventario/inventario.component';
import { MantenimientoComponent } from './modulos/mantenimiento/mantenimiento.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    AdministracionComponent,
    UsuariosComponent,
    RegistrosComponent,
    ProcedimientosComponent,
    ProveedorComponent,
    CategoriaComponent,
    HerramientasComponent,
    InventarioComponent,
    MantenimientoComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
