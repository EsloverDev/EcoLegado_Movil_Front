import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqIngresar } from '../../models/IReqIngresar.interface';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  standalone: true,
  imports: [ IonicModule, ReactiveFormsModule, HttpClientModule ],
  providers: [ ApiService ],
  styleUrls: ['./ingresar.component.scss'],
})
export class IngresarComponent  implements OnInit {

  frmLogin: FormGroup;

  constructor(private api: ApiService) { 
    this.frmLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
   }

   login(form: IReqIngresar){
    console.log(form)
    this.api.ingresar(form).subscribe(retorno => {
      console.log(retorno);
    })
   }

  ngOnInit() {}

}
