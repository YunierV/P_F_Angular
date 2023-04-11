import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoInicioComponent } from './COMPONENTES/cargoCrud/cargo-inicio/cargo-inicio.component';
import { UpdateCargoComponent } from './COMPONENTES/cargoCrud/update-cargo/update-cargo.component';
import { InicioCategoriaComponent } from './COMPONENTES/CategoriaCrud/inicio-categoria/inicio-categoria.component';
import { UpdateCategoriaComponent } from './COMPONENTES/CategoriaCrud/update-categoria/update-categoria.component';
import { InicioEmpleadoComponent } from './COMPONENTES/empleado_crud/inicio-empleado/inicio-empleado.component';
import { UpdateEmpleadoComponent } from './COMPONENTES/empleado_crud/update-empleado/update-empleado.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { LoginComponent } from './COMPONENTES/login/login.component';
import { NotFoundComponent } from './COMPONENTES/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'cargo',component:CargoInicioComponent},
  {path:'cargoEdit/:id',component:UpdateCargoComponent},
  {path:'home',component:InicioComponent,canActivate:[AuthGuard]},
  {path:'empleado',component:InicioEmpleadoComponent,canActivate:[AuthGuard]},
  {path:'empleado/:id',component:UpdateEmpleadoComponent},
  {path:'categoria',component:InicioCategoriaComponent},
  {path:'categoriaEdit/:id',component:UpdateCategoriaComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
