import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    usuario: ['',[Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private readonly us: UserService,
    private router: Router
  ) { }

  __login(data: any) {
    this.us.__be_login(data).subscribe((rest: any) => {
      if(rest.issuccess) {
        sessionStorage.setItem("token", rest.data.token);
        sessionStorage.setItem("user", rest.data.nombres + " " + rest.data.apellidopaterno + " " + rest.data.apellidomaterno);
        
        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          window.location.reload();
        })
      } else {
        alert("Credenciales Invalidas");
      }
    })
  }

  __onSubmit() {
    if(this.loginForm.valid) {
      this.__login(this.loginForm.value);
    } else {
      alert("Formulario no valido");
    }
  }

  ngOnInit(): void {
  }

}
