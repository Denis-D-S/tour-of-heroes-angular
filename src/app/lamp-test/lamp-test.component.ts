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

  // PASSO 1 - incializa variáveis
  public readonly ligada$: Observable<boolean> | undefined;
  public readonly corQuandoLigada$: Observable<string> | undefined;
  public readonly formato$: Observable<'quadrada' | 'circular'> | undefined;
  public cor$: Observable<string> | undefined;

  //construtor -> chama a Store e qualquer service que venha precisar
  constructor(private lampTestStore: LampTestStore) {
    // PASSO 2 - dentro do construtor, inicialize as variáveis

    //INICIALIZANDO VAR 1
    this.ligada$ = this.lampTestStore.select(state => state.ligada)

    //INICIALIZANDO VAR 2
    this.corQuandoLigada$ = this.lampTestStore.select((state) => state.corQuandoLigada)

    //INICIALIZANDO VAR 3
    this.formato$ = this.lampTestStore.select((state) => state.formato)

    //INICIALIZANDO VAR 4
    this.cor$ = this.lampTestStore.select(
      this.ligada$,
      this.corQuandoLigada$,
      (ligada, corQuandoLigada) => ligada ? corQuandoLigada : 'gray')
  }

  // PASSO 3 - começamos a criar os métodos que vão alterar o estado da Store

  //ESTE MÉTODO TROCA O ESTADO DA LÂMPADA DE 'LIGADA' PARA 'DELIGADA'.
  public ligarOuDesligar(): void{
    this.lampTestStore.setState((state) => ({
      ...state,
      ligada: !state.ligada
    }))
  }

  //ESTE MÉTODO MUDA O ESTADO DA LÂMPADA ALTERANDO SUA COR ATUAL PARA UMA NOVA COR RECEBIDA POR PARÂMETRO (mas note que o método abaixo utilizamos o "setState")
  public mudarCor(novaCor: string): void{
    this.lampTestStore.setState((state) => ({
      ...state,
      corQuandoLigada: novaCor
    }))
  }

  //ESTE MÉTODO TAMBÉM MUDA O ESTADO DA LÂMPADA ALTERANDO SUA COR ATUAL PARA UMA NOVA COR RECEBIDA POR PARÂMETRO (mas note que o método abaixo utilizamos o "patchState")
  public setCor(novaCor: string) {
    this.lampTestStore.patchState({
      corQuandoLigada: novaCor
    });
  }

  //ESTE MÉTODO MUDA O FORMATO DA LÂMPADA, DE QUADRADA PARA REDONDO, E VICE-VERSA
  public mudarFormato(): void{
    this.lampTestStore.mudarFormato();
  }



}
