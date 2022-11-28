import {Component, OnInit, Output} from '@angular/core';
import {Hero} from "../hero.model";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes(); //a aplicação inicializa pegando a lista de heróis
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes); //agora estamos preenchendo (com a lista de heróis) a variável inicializada vazia, porém de forma ASSÍNCRONA lendo o Observable da Service...
  }

  onSelect(hero: Hero): void { //método para selecionar um herói quando clicar nele na lista
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); //aqui estamos chamando o método add da MessageService, para adicionar uma mensagem na lista de mensagens
  }



}
