import { Component, OnInit } from '@angular/core';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito : any = [];
  constructor(private readonly ps: PedidoclienteService) { }

  __getCarrito(){
    //console.log(idUsuario);
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMDg1NjQsImV4cCI6MTYzOTExMjE2NCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkIwMjY5MkVGMUQ2Mjk3QzlGQkQxNDNDM0ZDNTAwN0QwIiwiaWF0IjoxNjM5MTA4NTY0LCJzY29wZSI6WyJlbWFpbCJdfQ.G00lfU732QENn5-1EI_QqrJi-mTIrZuHvDRijhFnH0Zd9AutgfC1oCcRvGXFcSWgRs9Qxo_w8vULAhWgQ-VZDsL90VD-coRETjS6XzgFUjuHlDpMFlgLkH2a-M6Gkud2xsTS87tHNiJocrsScNaQsJ9JlU6uti7Xo1vhZsnWpEdRtqEpeiPym3PHZ0ZlVU6weLXHyr5evbJmtbGVxUedl2UXqgQQkbB7IjGJxxI--KmbUoFRvFgvxv7xnOyNA9AUHZfE3pndOlOmi3g1pBHBJHPga_VoG2eWmShwTC0aClhw1s0-DMtvxhsfDyHkw5UCtDmFw0CsiB1wK20SGNUajA" };
    this.ps.__getCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        //console.log(rest.data);
    })
  }
  ngOnInit(): void {
    this.__getCarrito();
  }

}
