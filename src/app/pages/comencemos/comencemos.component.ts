import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-comencemos',
  standalone: true,
  imports: [ IonicModule ],
  templateUrl: './comencemos.component.html',
  styleUrls: ['./comencemos.component.scss'],
})
export class ComencemosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
