import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTES/login/login.component';
import { NotFoundComponent } from './COMPONENTES/not-found/not-found.component';
import { NavbarComponent } from './COMPONENTES/navbar/navbar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { InicioEmpleadoComponent } from './COMPONENTES/empleado_crud/inicio-empleado/inicio-empleado.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';

import { UpdateEmpleadoComponent } from './COMPONENTES/empleado_crud/update-empleado/update-empleado.component';
import { InicioClienteComponent } from './COMPONENTES/cliente_crud/inicio-cliente/inicio-cliente.component';
import { CreateClienteComponent } from './COMPONENTES/cliente_crud/create-cliente/create-cliente.component';
import { UpdateClienteComponent } from './COMPONENTES/cliente_crud/update-cliente/update-cliente.component';
import { InicioProductoComponent } from './COMPONENTES/productoCrud/inicio-producto/inicio-producto.component';
import { CreateProductoComponent } from './COMPONENTES/productoCrud/create-producto/create-producto.component';
import { UpdateProductoComponent } from './COMPONENTES/productoCrud/update-producto/update-producto.component';
import { CargoInicioComponent } from './COMPONENTES/cargoCrud/cargo-inicio/cargo-inicio.component';

import { UpdateCargoComponent } from './COMPONENTES/cargoCrud/update-cargo/update-cargo.component';
import { InicioDetalleVentaComponent } from './COMPONENTES/detalleVentaCrud/inicio-detalle-venta/inicio-detalle-venta.component';
import { CreateDetalleVentaComponent } from './COMPONENTES/detalleVentaCrud/create-detalle-venta/create-detalle-venta.component';
import { UpdateDetalleVentaComponent } from './COMPONENTES/detalleVentaCrud/update-detalle-venta/update-detalle-venta.component';
import { InicioVentaComponent } from './COMPONENTES/ventaCrud/inicio-venta/inicio-venta.component';
import { CreateVentaComponent } from './COMPONENTES/ventaCrud/create-venta/create-venta.component';
import { UpdateVentaComponent } from './COMPONENTES/ventaCrud/update-venta/update-venta.component';
import { InicioFacturaComponent } from './COMPONENTES/facturaCrud/inicio-factura/inicio-factura.component';
import { CreateFacturaComponent } from './COMPONENTES/facturaCrud/create-factura/create-factura.component';
import { InicioCategoriaComponent } from './COMPONENTES/CategoriaCrud/inicio-categoria/inicio-categoria.component';
import { UpdateCategoriaComponent } from './COMPONENTES/CategoriaCrud/update-categoria/update-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    InicioComponent,
    InicioEmpleadoComponent,
    UpdateEmpleadoComponent,
    InicioClienteComponent,
    CreateClienteComponent,
    UpdateClienteComponent,
    InicioProductoComponent,
    CreateProductoComponent,
    UpdateProductoComponent,
    CargoInicioComponent,
    UpdateCargoComponent,
    InicioDetalleVentaComponent,
    CreateDetalleVentaComponent,
    UpdateDetalleVentaComponent,
    InicioVentaComponent,
    CreateVentaComponent,
    UpdateVentaComponent,
    InicioFacturaComponent,
    CreateFacturaComponent,
    InicioCategoriaComponent,
    UpdateCategoriaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
