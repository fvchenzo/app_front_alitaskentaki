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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMTI3MDEsImV4cCI6MTYzOTExNjMwMSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkE0NDhFNzk4OEJFQjk0MUQ2NEI3NzU1RjAyMTIxNkVEIiwiaWF0IjoxNjM5MTEyNzAxLCJzY29wZSI6WyJlbWFpbCJdfQ.wRVh20fE21TbGqAK3SGTq9OAfnlEwiN9_o6i6fpytV5NFfJwdhAlgq_codistv65dUO1nzXrro2guW6damXqY0EMzl_4dZTQP573rIanCIjs4FxW_l2P9MY4DmIcw78jzDVSmHV7lrFkMzcd0wziGZDSHaoPeG9jrcXbb0EZ1XPa1f7m1WhNyLjSZ4xMv1Gk2Aji1kkna-8P5ddPMHjOe_xmeNKOCCc09ECJ_09NPlOgZIgHmgsoqth-dMHnbSyoG0YyONgC-nVfttw5vB8FeVOhN8lm_ZJK_IzgpI4oqlzj4HA9lR1i4nq_w7uiKc2U8rbue9QEAFZI07oVEhfquA" };
    
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
