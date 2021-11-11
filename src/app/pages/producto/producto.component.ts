import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

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
