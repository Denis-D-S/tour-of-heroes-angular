import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-second-test',
  templateUrl: './data-binding-second-test.component.html',
  styleUrls: ['./data-binding-second-test.component.scss']
})
export class DataBindingSecondTestComponent {

  tituloCriadoNoTS:string = 'Olá! Eu sou um título criado no TS, mas estou sendo exibido no HTML!';
  outroTituloCriadoNoTS:string ='Olá, eu sou outro título criado no TS, e também estou sendo exibido no HTML!';

  displayTitle: string | undefined;


  updateTitle(event:any): void {   //tive que criar o método ao lado para fazer com que as características do "placeholder" não fossem perdidas.
    this.outroTituloCriadoNoTS = event.target.value; //via o parâmetro "event" passado para esta função, nós estamos capturando os botões clicados pelo usuário devido ao evento "(input)" que usamos no input no HTML.
    // console.log('O outroTituloCriadoNoTS event.target.value: ' + this.outroTituloCriadoNoTS);
  }


}
