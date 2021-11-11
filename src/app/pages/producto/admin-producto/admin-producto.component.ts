import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {

  productos : any = [];

  constructor(private readonly ps: ProductosService) { }

  __getProductos(){
    this.ps.__getProductos().subscribe((rest: any) =>{
        this.productos = rest;
        console.log(this.productos);
    })
  }

  ngOnInit(): void {
    this.__getProductos();
  }
}
