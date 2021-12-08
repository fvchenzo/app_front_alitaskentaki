import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listado-categoria',
  templateUrl: './listado-categoria.component.html',
  styleUrls: ['./listado-categoria.component.css']
})
export class ListadoCategoriaComponent implements OnInit {

  categorias : any = [];
  constructor(private readonly cs: CategoriaService) { }
  __getCategorias(){
    this.cs.__getCategorias().subscribe((rest: any) =>{
        this.categorias = rest.data;
        //console.log(rest.data);
    })
  }
  ngOnInit(): void {
    this.__getCategorias();
  }

}
