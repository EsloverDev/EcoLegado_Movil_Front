import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqRegistro } from '../../models/IReqRegistro.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: true,
  imports: [ IonicModule, ReactiveFormsModule, HttpClientModule ],
  providers: [ ApiService ],
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  frmRegistro: FormGroup;

  constructor(private api: ApiService) { 
    this.frmRegistro = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
      confClave: new FormControl('', Validators.required)
    })
   }

   register(form: IReqRegistro){
    console.log(form);
    this.api.registrar(form).subscribe(retorno => {
      console.log(retorno);
    })
   }

  ngOnInit() {}

}
