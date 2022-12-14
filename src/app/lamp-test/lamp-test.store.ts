
//primeiro interface da declaração do estado do componente
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";


interface LampTestStoreState {
  ligada: boolean;
  corQuandoLigada: string;
  formato: 'quadrada' | 'circular';
}

//depois inicializa o estado inicial do componente
const defaultState: LampTestStoreState = {
  ligada:false,
  corQuandoLigada: 'yellow',
  formato: 'quadrada'
}

//depois vem a classe em si que importa do ComponentStore e injeta o estado inicial
@Injectable()
export class LampTestStore extends ComponentStore<LampTestStoreState>{
  constructor() {
    super(defaultState);
  }

  //depois o método que vai mudar o estado do componente (vai mudar o formato da lâmpada)
  readonly mudarFormato = this.updater((estadoAntigo) => {
    const novoEstado: LampTestStoreState = {
      ...estadoAntigo,
      formato: estadoAntigo.formato === 'quadrada' ? 'circular' : 'quadrada'
    }
    return novoEstado;
  })

}

