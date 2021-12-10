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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxNzA1ODAsImV4cCI6MTYzOTI0MjU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkE3MDIzRDc2RkRDOTlENDgxOUNBODJDREMwNjVBQ0FDIiwiaWF0IjoxNjM5MTcwNTgwLCJzY29wZSI6WyJlbWFpbCJdfQ.pTzuhvvcFkQl9wJhUL4MoPX6WJK2jnMU_lxeYlbfzR6BPGIpvivMVnyRjp8g7A2qcXhaiB8jqoAwLhA_y_pnz9msLJ-8XPadTXkex2YsBh-gXO2NoKdwuYjCWixeZjZ_zqaCWXy9D6XJES3XA2MUssl87zE9zlikIOcW7VkC_8tSv1aXbANRhEQ3lG5eSfMFcoIKArpzuqnmvFWvnx3_ZlKjuOgTt60HAbSUjYj0ohzvDMhEoJ-Crr2K5HylJ4A4ez6SIZhs4ZSZKnkxVIRwyTYm4CFu5lBkcuhH_Azcb6YlLVQBX9THFkpGAORB3XRX-00Cr8yCg7yqZ0R5QZcH1A" };
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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxNzA1ODAsImV4cCI6MTYzOTI0MjU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkE3MDIzRDc2RkRDOTlENDgxOUNBODJDREMwNjVBQ0FDIiwiaWF0IjoxNjM5MTcwNTgwLCJzY29wZSI6WyJlbWFpbCJdfQ.pTzuhvvcFkQl9wJhUL4MoPX6WJK2jnMU_lxeYlbfzR6BPGIpvivMVnyRjp8g7A2qcXhaiB8jqoAwLhA_y_pnz9msLJ-8XPadTXkex2YsBh-gXO2NoKdwuYjCWixeZjZ_zqaCWXy9D6XJES3XA2MUssl87zE9zlikIOcW7VkC_8tSv1aXbANRhEQ3lG5eSfMFcoIKArpzuqnmvFWvnx3_ZlKjuOgTt60HAbSUjYj0ohzvDMhEoJ-Crr2K5HylJ4A4ez6SIZhs4ZSZKnkxVIRwyTYm4CFu5lBkcuhH_Azcb6YlLVQBX9THFkpGAORB3XRX-00Cr8yCg7yqZ0R5QZcH1A" };
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
