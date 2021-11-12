import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingngMOdule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LocalComponent } from './pages/local/local.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPedidoComponent } from './pages/pedido/admin-pedido/admin-pedido.component';
import { DetallePedidoComponent } from './pages/pedido/detalle-pedido/detalle-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from './pages/producto/detalle-producto/detalle-producto.component';
import { ListadoProductoComponent } from './pages/producto/listado-producto/listado-producto.component';
import { AdminProductoComponent } from './pages/producto/admin-producto/admin-producto.component';

import {GoogleMapsModule} from '@angular/google-maps';
import { PedidoclienteComponent } from './pages/pedidocliente/pedidocliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalComponent,
    ContactoComponent,
    LoginComponent,
    AdminPedidoComponent,
    DetallePedidoComponent,
    DetalleProductoComponent,
    ListadoProductoComponent,
    AdminProductoComponent,
    PedidoclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingngMOdule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
