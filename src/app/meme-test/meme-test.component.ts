import {Component, OnInit} from '@angular/core';
import {MediaQueryService} from "../services/mediaQueryService";
import {MemeTestStore} from "./meme-test.store";
import {Observable} from "rxjs";


//NÃO ESQUEÇA DESTE PASSO DO PROVIDERS PARA FAZER O STORE FUNCIONAR!!!!!
@Component({
  selector: 'app-meme-test',
  templateUrl: './meme-test.component.html',
  styleUrls: ['./meme-test.component.scss'],
  providers: [MemeTestStore] //insere o store no componente
})
export class MemeTestComponent implements OnInit {
  public readonly show$: Observable<boolean> | undefined; //este cara vai trocar a imagem para fazer aparecer e desaparecer.
  public readonly meme$: Observable<string> | undefined //este cara vai guardar o link da imagem do meme
  public readonly derivada: Observable<string> | undefined //esta variável é uma "derivada" das outras 2 variáveis acima que compoem o estado do componente. Esta variável "derivada" vai mudar quando o "estado antigo" da aplicação mudar para o "novo estado" (quando true virar false na var "show")
  public showDiv: string = "NENHUM MEME AINDA, CLIQUE NO BOTÃO ABAIXO PARA VER UM MEME!";

  constructor(public mediaQueryService: MediaQueryService, private memeStore: MemeTestStore) {
    this.show$ = this.memeStore.select(state => state.show); //estamos pegando o valor de show do estado inicial/atual da Store
    this.meme$ = this.memeStore.select(state => state.meme); //estamos pegando a imagem que vem do 'estado inicial/atual' da Store
    this.derivada = memeStore.select(this.show$, this.meme$,
      (show, meme) => show ? `<img src="${meme}"  alt="imagem do meme">` : this.showDiv);
  }


  ngOnInit(): void {
  }

  public trocar(): void{ //este método deve mudar a variável "show", para mostrar o meme na tela! Aqui estamos alterando o estado inicial para um "novo estado". O novo estado é o que vai ser mostrado na tela, via a variável "derivada"
    this.memeStore.setState((state) => ({
      ...state,
      show: !state.show,
    }));
  }

}
