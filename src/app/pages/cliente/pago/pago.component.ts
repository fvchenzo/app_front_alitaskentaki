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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkwMDc4MDgsImV4cCI6MTYzOTAxMTQwOCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6Ijg1Qjg1NUFBRTEzQ0E1MkE1OTdEMzAyRjU2NjA1RENEIiwiaWF0IjoxNjM5MDA3ODA4LCJzY29wZSI6WyJlbWFpbCJdfQ.evmw18jv4piRVmMDU_R4V6aM23f_ZWpIsu3BsE2GpPG_x0cJaCzQMIdX3X0oFFial0tEJ8u--SuNrOVVhM-haRWvuqjDk10LU-9OEmS-i9Qp4sY-FH0LzM9DW9z6LJaKHvWSQ2eRWNtcgFamszSmZYU5FIUX3-pvXJvCkJJZY8MJToCuk0bmpmyje5OMo8bj-ZLIiV1RkYpJHDtKIIilZd2HItWTLtAjzu4Hjh3BylxP5BZOcg6TZ3lstWej53Be9x9SogM3ef_wAlrtMnqGCoiFmvmMvtbZSAQ9u10-SdR2pULPwncr5ji36L_Kwtu4cjvcpxCAScNcfnZqiefefw" };
    this.ps.__getMontoCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        console.log(rest.data);
    })
  }

  ngOnInit(): void {
    this.__getMontoCarrito();
  }

}
