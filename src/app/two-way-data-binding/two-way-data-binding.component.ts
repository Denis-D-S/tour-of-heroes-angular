import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit{
  // @Output() nomeDigitado = new EventEmitter<string>();
  @Output() inputValueChange: any;

  nomeDigitado:any;
  @Output() emitirNomeDigitado = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }


}
