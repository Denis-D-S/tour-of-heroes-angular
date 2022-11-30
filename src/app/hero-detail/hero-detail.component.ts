import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  // SEGUNDO PASSO DA TRANSFERÊNCIA DE UM COMPONENTE PARA OUTRO
  // @Input() hero?: Hero; //aqui estamos dizendo que o componente pai (HeroesComponent) vai passar um herói para o componente filho (HeroDetailComponent) através da propriedade hero

  hero: Hero | undefined;

  constructor(private heroService: HeroService, //nosso service responsável por pegar os dados dos herois que vem do mock (simulando nosso backend)
              private location: Location, //biblioteca que nos permite interagir com o histórico do browser (voltar, avançar, etc)
              private route: ActivatedRoute) { //biblioteca que nos permite pegar/capturar o parâmetro da URL (id do herói)
  }
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id: any = Number(this.route.snapshot.paramMap.get('id')); //pegando o id do herói da URL
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero); //pegando o herói pelo id e preenchendo a variável hero
  }

  // getHeroById(id: number): void {
  //   this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  // }



}
