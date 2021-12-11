import { Component, OnInit } from '@angular/core';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito : any = [];
  constructor(private readonly ps: PedidoclienteService) { }

  __getCarrito(){
    //console.log(idUsuario);
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + token };
    this.ps.__getCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        //console.log(rest.data);
    })
  }
  ngOnInit(): void {
    this.__getCarrito();
  }

}
