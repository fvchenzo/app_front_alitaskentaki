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
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxNzA1ODAsImV4cCI6MTYzOTI0MjU4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IkE3MDIzRDc2RkRDOTlENDgxOUNBODJDREMwNjVBQ0FDIiwiaWF0IjoxNjM5MTcwNTgwLCJzY29wZSI6WyJlbWFpbCJdfQ.pTzuhvvcFkQl9wJhUL4MoPX6WJK2jnMU_lxeYlbfzR6BPGIpvivMVnyRjp8g7A2qcXhaiB8jqoAwLhA_y_pnz9msLJ-8XPadTXkex2YsBh-gXO2NoKdwuYjCWixeZjZ_zqaCWXy9D6XJES3XA2MUssl87zE9zlikIOcW7VkC_8tSv1aXbANRhEQ3lG5eSfMFcoIKArpzuqnmvFWvnx3_ZlKjuOgTt60HAbSUjYj0ohzvDMhEoJ-Crr2K5HylJ4A4ez6SIZhs4ZSZKnkxVIRwyTYm4CFu5lBkcuhH_Azcb6YlLVQBX9THFkpGAORB3XRX-00Cr8yCg7yqZ0R5QZcH1A" };
    this.ps.__getCarritoCliente(header).subscribe((rest: any) =>{
        this.carrito = rest.data;
        //console.log(rest.data);
    })
  }
  ngOnInit(): void {
    this.__getCarrito();
  }

}
