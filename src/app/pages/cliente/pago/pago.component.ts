import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  carrito : any
  pagoForm = this.fb.group({
    cardNumber: ["", Validators.required],
    cvv: ["", Validators.required],
    owner: ["", Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private readonly ps: PedidoclienteService,
    private router: Router) { }

  __getMontoCarrito(){
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMTY4NTYsImV4cCI6MTYzOTEyMDQ1NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IjlERTUyRDExN0U0MkE2OTU3QTExRUYwOTc1MUE3Q0U1IiwiaWF0IjoxNjM5MTE2ODU2LCJzY29wZSI6WyJlbWFpbCJdfQ.bpZy0dH-vzkJ4d7lla7zJ6-MnFgUqPCF1Jl7YyWL2dkEefCKmmmeYNvyTDFbdjVY52KH6lEwzTC3BfiFyA39OxgFq54J1O4G7qc41W1M03hwsK3WchlrhGRBldiPTIE9LwFnx_r4KWrZAa3mDdvJRwne5APXXlhXzTX2EUadhwErBIdj75YyXzBYftFyY-TcxfTUcDB_-4eAHAEpPNNI0OHz2WGOpNtFkLAI_arU2KROyeHbeXI7WiDv38EMmB9TZIauM7um4kXBFZ-kzwW8OwP2q9YJUI2UytbOINXWdjsrla2_Jy9B2TT7jluehzdnVje_jFHoBgNZpEF0zFnq6g" };
    this.ps.__getMontoCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        //console.log(rest.data);
    })
  }
  __onSubmit() {
    console.log(this.pagoForm.value);
    if(this.pagoForm.valid) {
      this.__insert();
    }
    else{
      alert("Debe ingresar todos los datos");
    }
  }
  ngOnInit(): void {
    this.__getMontoCarrito();
  }
  __insert() {
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMTY4NTYsImV4cCI6MTYzOTEyMDQ1NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IjlERTUyRDExN0U0MkE2OTU3QTExRUYwOTc1MUE3Q0U1IiwiaWF0IjoxNjM5MTE2ODU2LCJzY29wZSI6WyJlbWFpbCJdfQ.bpZy0dH-vzkJ4d7lla7zJ6-MnFgUqPCF1Jl7YyWL2dkEefCKmmmeYNvyTDFbdjVY52KH6lEwzTC3BfiFyA39OxgFq54J1O4G7qc41W1M03hwsK3WchlrhGRBldiPTIE9LwFnx_r4KWrZAa3mDdvJRwne5APXXlhXzTX2EUadhwErBIdj75YyXzBYftFyY-TcxfTUcDB_-4eAHAEpPNNI0OHz2WGOpNtFkLAI_arU2KROyeHbeXI7WiDv38EMmB9TZIauM7um4kXBFZ-kzwW8OwP2q9YJUI2UytbOINXWdjsrla2_Jy9B2TT7jluehzdnVje_jFHoBgNZpEF0zFnq6g" };
    //console.log({idProducto:1,cantidad:1});
    console.log(this.pagoForm.value);
    this.ps.__be_insertarPedidoCarrito(header).subscribe((rest: any) => {
      if(rest.issuccess) {
        alert("Su compra ha sido realizada correctamente");
        this.router.navigate(['home']);
      } else {
        alert(rest.errormessage);
      }
    })
  }
}
