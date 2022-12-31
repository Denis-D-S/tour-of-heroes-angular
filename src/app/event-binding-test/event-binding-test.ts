import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding-test',
  templateUrl: './event-binding-test.html',
  styleUrls: ['./event-binding-test.scss']
})
export class EventBindingTest {

  @Output() bolhas: EventEmitter<any>;
  @Output() bolhas2: EventEmitter<any>
  textoDigitado: string | undefined;
  public constructor() {
    this.bolhas = new EventEmitter<any>();
    this.bolhas2 = new EventEmitter<any>();
  }

  public clickParaBorbulhar(): any{
    this.bolhas.emit(); //estamos emitindo "undefined", pois não há valor nenhum dentro deste emit().
  }

  public clickParaBorbulhar2(textoDigitado:string | undefined): any{
      console.log('O event (click) do botão, tem o seguinte atributo sendo emitido via evento: ' + textoDigitado);
      this.bolhas2.emit(textoDigitado);
    }

}
