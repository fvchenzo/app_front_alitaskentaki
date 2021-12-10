import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminpedidoService } from 'src/app/services/adminpedido.service';

@Component({
  selector: 'app-admin-pedido',
  templateUrl: './admin-pedido.component.html',
  styleUrls: ['./admin-pedido.component.css']
})
export class AdminPedidoComponent implements OnInit {

  pedidos: any = []

  constructor(
    private readonly as: AdminpedidoService,
    private readonly ar: ActivatedRoute,
    private router: Router
  ) { }

  __getPedidos() {
    this.as.__getPedidos().subscribe((rest: any) => {
      this.pedidos = rest.data;
      console.log(rest);
    })
  }

  __modificarEstado(idpedido: number) {
    this.as.__modificarEstado(idpedido).subscribe((rest: any) => {
      console.log(rest.data);
      this.__getPedidos();
      
    })
  }

  ngOnInit(): void {
    this.__getPedidos();
    this.ar.params.subscribe((params: Params) => {
      if(params.idpedido) {
        this.__modificarEstado(params.idpedido);
        //this.router.navigate(['listaPedido'])
      }
    });
  }

}
