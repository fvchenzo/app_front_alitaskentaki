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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMTY4NTYsImV4cCI6MTYzOTEyMDQ1NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IjlERTUyRDExN0U0MkE2OTU3QTExRUYwOTc1MUE3Q0U1IiwiaWF0IjoxNjM5MTE2ODU2LCJzY29wZSI6WyJlbWFpbCJdfQ.bpZy0dH-vzkJ4d7lla7zJ6-MnFgUqPCF1Jl7YyWL2dkEefCKmmmeYNvyTDFbdjVY52KH6lEwzTC3BfiFyA39OxgFq54J1O4G7qc41W1M03hwsK3WchlrhGRBldiPTIE9LwFnx_r4KWrZAa3mDdvJRwne5APXXlhXzTX2EUadhwErBIdj75YyXzBYftFyY-TcxfTUcDB_-4eAHAEpPNNI0OHz2WGOpNtFkLAI_arU2KROyeHbeXI7WiDv38EMmB9TZIauM7um4kXBFZ-kzwW8OwP2q9YJUI2UytbOINXWdjsrla2_Jy9B2TT7jluehzdnVje_jFHoBgNZpEF0zFnq6g" };
    
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
