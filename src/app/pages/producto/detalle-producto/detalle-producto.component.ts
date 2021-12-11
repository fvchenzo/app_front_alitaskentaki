import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  carritoForm = this.fb.group({
    cantidad: [1, Validators.required],
    idProducto: [0, Validators.required]
  });

  producto: any = []
  constructor(
    private fb: FormBuilder,
    private readonly ps: ProductosService,
    private readonly pc: PedidoclienteService,
    private readonly ar: ActivatedRoute,
    private router: Router) { }

  __getProductoCodigo(codigo: number){
      this.ps.__getProductosPorId(codigo).subscribe((rest: any) =>{
        console.log(rest.data);
      this.producto = rest.data;
    })
  }

  __insert(data: any) {
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + token };
    
    //console.log(data);
    
    this.pc.__be_insertarCarito(data, header).subscribe((rest: any) => {
      if(rest.issuccess) {
        alert("Se añadió correctamente al carrito");
        this.router.navigate(['clienteCarrito']);
      } else {
        alert(rest.errormessage);
      }
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.codigo) {
        this.__getProductoCodigo(params.codigo);
        this.carritoForm.controls['idProducto'].setValue(Number(params.codigo));
      }
    });
  }

  __onSubmit() {
    if(this.carritoForm.valid) {
      this.__insert(this.carritoForm.value);
    }
  }
}
