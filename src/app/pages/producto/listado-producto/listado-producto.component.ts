import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos : any = [];

  constructor(private readonly ps: ProductosService,
    private readonly ar: ActivatedRoute) { }

  __getProductos(idCategoria: number){
    this.ps.__getProductos().subscribe((rest: any) =>{
        this.productos = rest.filter((item: { IdCategoria: Number}) => item.IdCategoria == idCategoria);
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.idCategoria) {
        this.__getProductos(params.idCategoria);
        
      }
    });
  }

}
