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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxNzA1ODAsImV4cCI6MTYzOTI0MjU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkE3MDIzRDc2RkRDOTlENDgxOUNBODJDREMwNjVBQ0FDIiwiaWF0IjoxNjM5MTcwNTgwLCJzY29wZSI6WyJlbWFpbCJdfQ.pTzuhvvcFkQl9wJhUL4MoPX6WJK2jnMU_lxeYlbfzR6BPGIpvivMVnyRjp8g7A2qcXhaiB8jqoAwLhA_y_pnz9msLJ-8XPadTXkex2YsBh-gXO2NoKdwuYjCWixeZjZ_zqaCWXy9D6XJES3XA2MUssl87zE9zlikIOcW7VkC_8tSv1aXbANRhEQ3lG5eSfMFcoIKArpzuqnmvFWvnx3_ZlKjuOgTt60HAbSUjYj0ohzvDMhEoJ-Crr2K5HylJ4A4ez6SIZhs4ZSZKnkxVIRwyTYm4CFu5lBkcuhH_Azcb6YlLVQBX9THFkpGAORB3XRX-00Cr8yCg7yqZ0R5QZcH1A" };
    
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
