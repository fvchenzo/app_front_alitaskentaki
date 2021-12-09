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
      this.ps.__getProductos().subscribe((rest: any) =>{
      this.producto = rest.filter((item: { Codigo: Number}) => item.Codigo == codigo);
    })
  }

  __insert(data: any) {
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkwMDc4MDgsImV4cCI6MTYzOTAxMTQwOCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6Ijg1Qjg1NUFBRTEzQ0E1MkE1OTdEMzAyRjU2NjA1RENEIiwiaWF0IjoxNjM5MDA3ODA4LCJzY29wZSI6WyJlbWFpbCJdfQ.evmw18jv4piRVmMDU_R4V6aM23f_ZWpIsu3BsE2GpPG_x0cJaCzQMIdX3X0oFFial0tEJ8u--SuNrOVVhM-haRWvuqjDk10LU-9OEmS-i9Qp4sY-FH0LzM9DW9z6LJaKHvWSQ2eRWNtcgFamszSmZYU5FIUX3-pvXJvCkJJZY8MJToCuk0bmpmyje5OMo8bj-ZLIiV1RkYpJHDtKIIilZd2HItWTLtAjzu4Hjh3BylxP5BZOcg6TZ3lstWej53Be9x9SogM3ef_wAlrtMnqGCoiFmvmMvtbZSAQ9u10-SdR2pULPwncr5ji36L_Kwtu4cjvcpxCAScNcfnZqiefefw" };
    
    //console.log(data);
    //console.log({idProducto:1,cantidad:1});
    
    this.pc.__be_insertarCarito({idProducto:1,cantidad:1}, header).subscribe((rest: any) => {
      if(rest.issuccess) {
        alert("Proyecto creado con ID: " + rest.data);
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
