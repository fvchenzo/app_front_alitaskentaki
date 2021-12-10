import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  locales : any = [];
  constructor(private readonly cs: LocalService) { }
  __getLocales(){
    this.cs.__getLocales().subscribe((rest: any) =>{
        this.locales = rest.data;
        console.log(rest);
    })
  }
  ngOnInit(): void {
    this.__getLocales();
  }
}
