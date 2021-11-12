import { Component, OnInit } from '@angular/core';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promociones : any = [];
  constructor(private readonly cs: PromocionService) { }
  __getPromociones(){
    this.cs.__getPromociones().subscribe((rest: any) =>{
        this.promociones = rest;
        console.log(rest);
    })
  }

  ngOnInit(): void {
    this.__getPromociones();
  }

}