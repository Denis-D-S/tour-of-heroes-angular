import {Injectable} from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface MemeTestState { //cria a interface que guarda o estado do componente
  show: boolean;
  meme: string;
}

const defaultState: MemeTestState = { //cria o estado inicial do componente
  show: false,
  meme: "https://pbs.twimg.com/media/EUXOgVHUUAERTe6.jpg"
}

@Injectable() //insere/injeta o estado do componente no ComponentStore (para ser usado neste Component MemeTestStore
export class MemeTestStore extends ComponentStore<MemeTestState> {
  constructor() {
    console.log("MemeTestStore constructor rodou");
    super(defaultState);
  }
}
