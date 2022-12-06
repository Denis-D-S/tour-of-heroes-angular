import { Component } from '@angular/core';
import {LampTestStore} from "./lamp-test.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lamp-test',
  templateUrl: './lamp-test.component.html',
  styleUrls: ['./lamp-test.component.scss'],
  providers: [LampTestStore]
})
export class LampTestComponent {

  //incializa variáveis
  public readonly ligada$: Observable<boolean> | undefined;
  public readonly corQuandoLigada$: Observable<string> | undefined;
  public readonly formato$: Observable<'quadrada' | 'circular'> | undefined;

  //construtor -> chama a Store e qualquer service que venha precisar
  constructor(private lampTestStore: LampTestStore) {
    //dentro do construtor, inicialize as variáveis
    this.ligada$ = this.lampTestStore.select(state => state.ligada)
    this.corQuandoLigada$ = this.lampTestStore.select((state) => state.corQuandoLigada)
    this.formato$ = this.lampTestStore.select((state) => state.formato)
  }

  //começamos a criar os métodos que vão alterar o estado da Store

  //ESTE MÉTODO TROCA O ESTADO DA LÂMPADA DE 'LIGADA' PARA 'DELIGADA'.
  public trocar(): void{
    this.lampTestStore.setState((state) => ({
      ...state,
      ligada: !state.ligada
    }))
  }

  //ESTE MÉTODO MUDA O ESTADO DA LÂMPADA ALTERANDO SUA COR ATUAL PARA UMA NOVA COR RECEBIDA POR PARÂMETRO
  public mudarCor(novaCor: string): void{
    this.lampTestStore.setState((state) => ({
      ...state,
      corQuandoLigada: novaCor
    }))
  }

  //ESTE MÉTODO MUDA O FORMATO DA LÂMPADA, DE QUADRADA PARA REDONDO, E VICE-VERSA
  public mudarFormato(): void{
    this.lampTestStore.mudarFormato();
  }



}
