import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // SEGUNDO PASSO DA TRANSFERÊNCIA DE UM COMPONENTE PARA OUTRO
  @Input() hero?: Hero;

}
