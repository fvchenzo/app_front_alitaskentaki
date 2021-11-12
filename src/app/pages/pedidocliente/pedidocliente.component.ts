import { Component, OnInit } from '@angular/core';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';

@Component({
  selector: 'app-pedidocliente',
  templateUrl: './pedidocliente.component.html',
  styleUrls: ['./pedidocliente.component.css']
})
export class PedidoclienteComponent implements OnInit {

  pedidoscliente : any = [];
  constructor(private readonly cs: PedidoclienteService) { }
  __getPedidosCliente(){
    this.cs.__getPedidosCliente().subscribe((rest: any) =>{
        this.pedidoscliente = rest;
        console.log(rest);
    })
  }
  ngOnInit(): void {
    this.__getPedidosCliente();
  }
}