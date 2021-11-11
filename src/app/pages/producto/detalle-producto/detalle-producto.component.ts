import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any = []
  constructor(
    private readonly ps: ProductosService,
    private readonly ar: ActivatedRoute) { }

  __getProductoCodigo(codigo: number){
    this.ps.__getProductos().subscribe((rest: any) =>{
      this.producto = rest.filter((item: { Codigo: Number}) => item.Codigo == codigo);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.codigo) {
        this.__getProductoCodigo(params.codigo);
      }
    });
  }

  __onSubmit() {
    
  }
}
