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

  __getCarrito(idUsuario: number){
    console.log(idUsuario);
    this.ps.__getCarritoCliente(idUsuario).subscribe((rest: any) =>{
        this.carrito = rest.data;
        //console.log(rest.data);
    })
  }
  ngOnInit(): void {
    this.__getCarrito(1);
  }

}
