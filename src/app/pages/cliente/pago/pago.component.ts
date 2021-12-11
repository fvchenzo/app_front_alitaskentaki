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
    const header = { Authorization: 'Bearer ' + token };
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
    const header = { Authorization: 'Bearer ' + token };
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
