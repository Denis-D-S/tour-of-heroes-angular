import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MediaQueryService} from "./services/mediaQueryService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour Of Heroes';

  @Input() public borbulhou: string | undefined

  myNumber = 0;

  constructor() {

  }

  //quando percebemos que capturamos um evento de click do outro componente, significa que borbulhou!Então vamos modificar o número!
  public metodoPaiCapturaBorbulhamento(): any {
    this.myNumber = Math.floor(Math.random() * 10) + 1; //a variável que antes era "0" se transforma em algum número randômico de 1 a 10
  }





}
