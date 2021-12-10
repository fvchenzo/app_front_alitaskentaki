import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdmindetallepedidoService } from 'src/app/services/admindetallepedido.service';
import { AdminpedidoService } from 'src/app/services/adminpedido.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pedido: any = [];
  usuario: any = [];
  productos: any = [];
  detallepedido: any = [];

  detallePedidoForm = this.fb.group({
    id: ['', Validators.required],
    cliente: ['', Validators.required],
    distrito: ['', Validators.required],
    direccion: ['', Validators.required],
    items: this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required]
    }),
    
    total: ['', Validators.required],
  })
  
  constructor( 
    private readonly ps: AdminpedidoService,
    private readonly ds: AdmindetallepedidoService,
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router
  ) { }


  __getDetallePedidoPorUsuarioYPedido(idusuario: number, idpedido: number) {
    this.ds.__getDetallePedidoPorUsuarioYPedido(idusuario,idpedido).subscribe((rest: any) => {
      this.pedido = rest.data;
      this.detallepedido = rest.data.detallePedido;
      console.log(rest.data.detallePedido);
    })
  }

  __Regresar(){
    this.router.navigate(['listaPedido'])
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if (params.idusuario && params.idpedido){
        this.__getDetallePedidoPorUsuarioYPedido(params.idpedido, params.idusuario)
        //console.log(params.idusuario + " - " + params.idpedido);
      }
    })
  }

}
