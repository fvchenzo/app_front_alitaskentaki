import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  constructor( private fb: FormBuilder,
    private readonly us: UserService,
    private router: Router) { }
  RegistroForm = this.fb.group({
    usuario: ['',[Validators.required]],
    password: ['', Validators.required]
  });
  __registrar(data: any) 
    {}

  __onSubmit() {
    if(this.RegistroForm.valid) {
      this.__registrar(this.RegistroForm.value);
    } else {
      alert("Formulario no valido");
    }
  }
  ngOnInit(): void {
  }

}
