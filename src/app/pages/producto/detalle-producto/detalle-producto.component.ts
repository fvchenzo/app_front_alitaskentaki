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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMDg1NjQsImV4cCI6MTYzOTExMjE2NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkIwMjY5MkVGMUQ2Mjk3QzlGQkQxNDNDM0ZDNTAwN0QwIiwiaWF0IjoxNjM5MTA4NTY0LCJzY29wZSI6WyJlbWFpbCJdfQ.G00lfU732QENn5-1EI_QqrJi-mTIrZuHvDRijhFnH0Zd9AutgfC1oCcRvGXFcSWgRs9Qxo_w8vULAhWgQ-VZDsL90VD-coRETjS6XzgFUjuHlDpMFlgLkH2a-M6Gkud2xsTS87tHNiJocrsScNaQsJ9JlU6uti7Xo1vhZsnWpEdRtqEpeiPym3PHZ0ZlVU6weLXHyr5evbJmtbGVxUedl2UXqgQQkbB7IjGJxxI--KmbUoFRvFgvxv7xnOyNA9AUHZfE3pndOlOmi3g1pBHBJHPga_VoG2eWmShwTC0aClhw1s0-DMtvxhsfDyHkw5UCtDmFw0CsiB1wK20SGNUajA" };
    
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
