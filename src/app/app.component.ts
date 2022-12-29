import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MediaQueryService} from "./services/mediaQueryService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  @Input() nomeDigitado: any;


  @Input() public borbulhou: string | undefined//este cara chegou até aqui vindo do componente "event-binding-test" e ele é apenas um event que não estamos fazendo nada com ele.
  valorRecebidoPeloEvento: string | undefined;

  myNumber = 0;

  constructor() {}

  public pegueiOEvento(event: any): any {
    this.valorRecebidoPeloEvento = event; //como o valor digitado é apenas uma string que estamos recebendo, apenas "event" é suficiente. Mas se o evento que estamos recebendo fosse um Objeto, teríamos daí que usar "event.target.value"
  }

  //quando percebemos que capturamos um evento de click do outro componente, significa que borbulhou!Então vamos modificar o número!
  public quandoReceboBorbulhamentoEuMudoNumero(): any {
    this.myNumber = Math.floor(Math.random() * 10) + 1; //a variável que antes era "0" se transforma em algum número randômico de 1 a 10
  }

  atualizarNomeDigitado(nome:string){
    this.nomeDigitado = nome;
  }







}
