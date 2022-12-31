import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit{
  nomeDigitado:string | undefined = "digite aqui...";
  @Output() emitirNomeDigitado = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }
  capturandoDigitacaoDoUsuario($event: any) {
    this.nomeDigitado = $event.target.value;
  }
  enviandoEventoParaPai($event: MouseEvent) {
    this.emitirNomeDigitado.emit(this.nomeDigitado);
  }
}
