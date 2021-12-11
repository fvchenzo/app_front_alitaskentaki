import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-admin-producto',
  templateUrl: './admin-producto.component.html',
  styleUrls: ['./admin-producto.component.css']
})
export class AdminProductoComponent implements OnInit {

  productos : any = [];

  
  productoForm = this.fb.group({
    codigo: [0, Validators.required],
    Nombre: ['', Validators.required],
    Categoria: [''],
    IdCategoria: [0],
    Imagen : [''],
    Descripcion: [''],
    UsuarioCrea: [0],
    UsuarioModifica: [0]
  });

  constructor(
    private readonly ps: ProductosService,
    private fb: FormBuilder,
    private router: Router
    ) { }

  __getProductos(){
    this.ps.__getProductos().subscribe((rest: any) =>{
        this.productos = rest.data;
        console.log(this.productos);
    })
  }

  @ViewChild('editForm') editFormRef: any;
  @ViewChild('deleteForm') deleteFormRef: any;


  ngOnInit(): void {
    this.__getProductos();
  }

  // cambios mh
  __insert(data: any){
    this.ps.__insertar(data).subscribe((rest: any) =>{
      if(rest.issuccess){
        alert("Producto creato con ID: " + rest.data.id);
        window.location.reload();
      }
      else{
        alert("No se pudo crear: " + rest.errormessage);
      }
    })
  }

  __onSubmit(){
      if (this.productoForm.valid){
        this.__insert(this.productoForm.value);
      }
  }


  __Delete(){
    this.ps.__eliminar(1000,1).subscribe((rest : any) => {
      if(rest.issuccess){
        alert("El Producto con ID " + rest.data.id + " fue eliminado");
        // this.router.navigate(["adminProducto"]);
        window.location.reload();
      }
      else{
        alert("No se pudo crear: " + rest.errormessage);
      }
    });
  }

  __onEdit(IdProducto: number){
    alert('Editando');
  }

  __onDelete(IdProducto: number){
    alert('Esta a punto de elimnar el producto ${IdProducto}' );

  }

}
