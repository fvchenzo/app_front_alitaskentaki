import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SugerenciaService } from 'src/app/services/sugerencia.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  sugerencia: any = [];
  sugerenciaForm = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    tipoconsulta: ['', Validators.required],
    consulta: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private ar: ActivatedRoute,
    private router: Router,
    private readonly ps: SugerenciaService
  ) {}

  __insert(data: any) {
    const token  = sessionStorage.getItem("token");
    const header = { Authorization: 'Bearer ' + "eyJhbGciOiJSUzI1NiIsImtpZCI6IkUyREE5MTM2M0QwMkM2ODYwMTM2NEU1QzhGQUZDMzY1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzkxMTY4NTYsImV4cCI6MTYzOTEyMDQ1NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIiwiYXVkIjoiQVBJLUFQUC1VUEMiLCJjbGllbnRfaWQiOiI3MUJCNzIzNi1DOTdGLTQ2RjgtQTBDQi0zOTVBQTBGQ0FEREYiLCJjbGllbnRfbnVtZXJvX2RvY3VtZW50byI6IjQzNjg1MjcxIiwiY2xpZW50X2NvZGlnb191c3VhcmlvIjoiMSIsImp0aSI6IjlERTUyRDExN0U0MkE2OTU3QTExRUYwOTc1MUE3Q0U1IiwiaWF0IjoxNjM5MTE2ODU2LCJzY29wZSI6WyJlbWFpbCJdfQ.bpZy0dH-vzkJ4d7lla7zJ6-MnFgUqPCF1Jl7YyWL2dkEefCKmmmeYNvyTDFbdjVY52KH6lEwzTC3BfiFyA39OxgFq54J1O4G7qc41W1M03hwsK3WchlrhGRBldiPTIE9LwFnx_r4KWrZAa3mDdvJRwne5APXXlhXzTX2EUadhwErBIdj75YyXzBYftFyY-TcxfTUcDB_-4eAHAEpPNNI0OHz2WGOpNtFkLAI_arU2KROyeHbeXI7WiDv38EMmB9TZIauM7um4kXBFZ-kzwW8OwP2q9YJUI2UytbOINXWdjsrla2_Jy9B2TT7jluehzdnVje_jFHoBgNZpEF0zFnq6g" };
    
    //console.log(data);
    
    this.ps.__be_insertarSugerencia(data, header).subscribe((rest: any) => {
      if(rest.issuccess) {
        alert("Se registro correctamente");
      } else {
        alert(rest.errormessage);
      }
    })
  }

  ngOnInit(): void {
    
  }
  __onSubmit() {
    if(this.sugerenciaForm.valid) {
      this.__insert(this.sugerenciaForm.value);
    }
  }
}
