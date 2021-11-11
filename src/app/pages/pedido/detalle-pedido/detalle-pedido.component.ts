import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  detallePedidoForm = this.fb.group({
    id: ['', Validators.required],
    cliente: ['', Validators.required],
    distrito: ['', Validators.required],
    direccion: ['', Validators.required],
    items: this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required]
    }),
    
    total: ['', Validators.required],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
