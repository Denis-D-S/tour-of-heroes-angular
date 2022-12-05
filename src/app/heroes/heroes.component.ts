import {Component, OnInit, Output} from '@angular/core';
import {Hero} from "../backEnd-DataBase/hero.model";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes(); //a aplicação inicializa pegando a lista de heróis
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //agora estamos preenchendo (com a lista de heróis) a variável inicializada vazia, porém de forma ASSÍNCRONA lendo o Observable da Service...
  }


}
