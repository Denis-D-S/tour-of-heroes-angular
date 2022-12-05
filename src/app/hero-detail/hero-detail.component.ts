import {Component, Input, OnInit} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../backEnd-DataBase/hero.model";

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
    const id = Number(this.route.snapshot.paramMap.get('id')); //aqui estamos pegando o parâmetro da URL (id do herói) e atribuindo a constante id
    this.heroService.getHero(id).subscribe(hero => this.hero = hero); //aqui estamos pegando o herói pelo id e atribuindo a variável hero
    console.log('constante id mostrada via método getHero() do hero-detail.component: ' + id);

  }

  // getHeroById(id: number): void {
  //   this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  // }


  goBack() {
    this.location.back(); //aqui estamos voltando para a tela anterior... Muito bom este 'location'... é uma biblioteca que facilmente busca "lembra" qual era a página anterior do histórico, e volta para ela...
  }
}
