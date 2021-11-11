import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { ProductoComponent } from "./pages/producto/producto.component";
import { LocalComponent } from "./pages/local/local.component";
import { AdminPedidoComponent } from "./pages/pedido/admin-pedido/admin-pedido.component";
import { DetallePedidoComponent } from "./pages/pedido/detalle-pedido/detalle-pedido.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'local', component: LocalComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'listaPedido', component: AdminPedidoComponent},
    {path: 'detallePedido', component: DetallePedidoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingngMOdule {}
