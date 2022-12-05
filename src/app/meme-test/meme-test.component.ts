import {Component, OnInit} from '@angular/core';
import {MediaQueryService} from "../services/mediaQueryService";
import {MemeTestStore} from "./meme-test.store";
import {Observable} from "rxjs";


//NÃO ESQUEÇA DESTE PASSO DO PROVIDERS PARA FAZER O STORE FUNCIONAR!!!!!
@Component({
  selector: 'app-meme-test',
  templateUrl: './meme-test.component.html',
  styleUrls: ['./meme-test.component.scss'],
  providers: [MemeTestStore] //insere/injeta o estado do componente no ComponentStore (para ser usado neste Component MemeTestStore
})
export class MemeTestComponent implements OnInit {
  public readonly show$: Observable<boolean> | undefined; //este cara vai trocar a imagem para fazer aparecer e desaparecer.
  public readonly meme$: Observable<string> | undefined //este cara vai guardar o link da imagem do meme
  public readonly derivada: Observable<string> | undefined
  public showDiv: string = "NENHUM MEME AINDA, CLIQUE NO BOTÃO ABAIXO PARA VER UM MEME!";

  // public showDiv = "Isso é um teste pra ver se o erro é aqui mesmo";

  constructor(public mediaQueryService: MediaQueryService, private memeStore: MemeTestStore) {
    this.show$ = this.memeStore.select(state => state.show); //estamos pegando o valor de show do estado inicial/atual da Store
    this.meme$ = this.memeStore.select(state => state.meme); //estamos pegando a imagem que vem do 'estado inicial/atual' da Store
    this.derivada = memeStore.select(this.show$, this.meme$,
      (show, meme) => show ? `<img src="${meme}"  alt="imagem do meme">` : this.showDiv);
  }


  ngOnInit(): void {
  }

  public trocar(): void{ //este método deve mudar a variável "show", para mostrar o meme na tela!
    this.memeStore.setState((state) => ({
      ...state,
      show: !state.show,
    }));
  }

}
