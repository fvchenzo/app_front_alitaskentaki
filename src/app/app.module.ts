import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingngMOdule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LocalComponent } from './pages/local/local.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminPedidoComponent } from './pages/pedido/admin-pedido/admin-pedido.component';
import { DetallePedidoComponent } from './pages/pedido/detalle-pedido/detalle-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    LocalComponent,
    ContactoComponent,
    LoginComponent,
    AdminPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingngMOdule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
