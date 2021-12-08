import { Component, OnInit } from '@angular/core';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  carrito : any

  constructor(private readonly ps: PedidoclienteService) { }

  __getMontoCarrito(idUsuario: number){
    console.log(idUsuario);
    this.ps.__getMontoCarritoCliente(idUsuario).subscribe((rest: any) =>{
        this.carrito = rest.data;
        console.log(rest.data);
    })
  }

  ngOnInit(): void {
    this.__getMontoCarrito(1);
  }

}
