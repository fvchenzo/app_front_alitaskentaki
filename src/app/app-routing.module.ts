import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { ProductoComponent } from "./pages/producto/producto.component";
import { LocalComponent } from "./pages/local/local.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'local', component: LocalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'producto', component: ProductoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingngMOdule {}
