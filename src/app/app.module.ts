import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingngMOdule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { LocalComponent } from './pages/local/local.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductoComponent,
    LocalComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingngMOdule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
