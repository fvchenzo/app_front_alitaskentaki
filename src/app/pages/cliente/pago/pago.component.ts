import { Component, OnInit } from '@angular/core';
import { PedidoclienteService } from 'src/app/services/pedidocliente.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  carrito : any

  constructor(private readonly ps: PedidoclienteService) { }

  __getMontoCarrito(){
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkwMDEzNDAsImV4cCI6MTYzOTAwNDk0MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IjBGNTc5QTE2NTBEOTEwRUEwQUQ1QUYxOTREQzdERUJBIiwiaWF0IjoxNjM5MDAxMzQwLCJzY29wZSI6WyJlbWFpbCJdfQ.jhq7oqMkJnVJtiAcu2ZH_FJes_dGpVUi0nQGuUaPe2DCcOCjlcaxS5HXk50TbG0gprsWlqePj0HNN420iZXERi5P86WlOweo96fYZ-bjEiT-cDPS0MMq__y8sTus2wy7FEor1-irHqBKUa5GmpLBeCYcSSvamNlgbQeeBbsUKQyaccINcGDJh4wzRhd4J76E3dEgjg8H9TcsG9xHHN0-Ll4yNCuVGoY2u5i1Y5hdj4kbpSqUNR9ZmYC5We9k9_wWzz-D8fr0g7q_7mO3BjGy-KxFIxFOpCuHPYxKQdiZOSl2QWqjC4LDcDzz6oxg80hHFJjvhDuUU7SEsMRJkWUWfg" };
    this.ps.__getMontoCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        console.log(rest.data);
    })
  }

  ngOnInit(): void {
    this.__getMontoCarrito();
  }

}
