import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { RegistrosComponent } from './modulos/registros/registros.component';
import { ProcedimientosComponent } from './modulos/procedimientos/procedimientos.component';
import { ProveedorComponent } from './modulos/proveedor/proveedor.component';
import { CategoriaComponent } from './modulos/categoria/categoria.component';
import { HerramientasComponent } from './modulos/herramientas/herramientas.component';
import { InventarioComponent } from './modulos/inventario/inventario.component';
import { MantenimientoComponent } from './modulos/mantenimiento/mantenimiento.component';
import { LoginComponent } from './modulos/login/login.component';

const routes: Routes = [{

  path: "",component: PrincipalComponent,
  children: [
    {path: "dashboard", component: DashboardComponent},
    {path: "usuarios", component: UsuariosComponent},
    {path: "administracion", component: AdministracionComponent},
    {path: "registros", component: RegistrosComponent},
    {path: "procedimientos", component: ProcedimientosComponent},
    {path: "proveedor", component: ProveedorComponent},
    {path: "categoria", component: CategoriaComponent},
    {path: "herramientas", component: HerramientasComponent},
    {path: "inventario", component: InventarioComponent},
    {path: "mantenimiento", component: MantenimientoComponent},
    {path: "", redirectTo: "/dashboard", pathMatch: "full"}
  ]
},
{ path: "Login", component: LoginComponent},

];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
