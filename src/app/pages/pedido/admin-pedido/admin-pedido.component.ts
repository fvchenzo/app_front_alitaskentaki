import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  ) { }

  __getPedidos() {
    this.as.__getPedidos().subscribe((rest: any) => {
      this.pedidos = rest.data;
      console.log(rest);
    })
  }

  ngOnInit(): void {
    this.__getPedidos()
  }

}
