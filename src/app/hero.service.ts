import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService { //esta classe simula a ideia de recebermos informações do BackEnd, porém, como estamos simulando, estamos pegando a lista de heróis mockada no mock-heroes.ts
  constructor(private messageService: MessageService) {}

  //MÉTODO GERALZÃO QUE PEGA TODOS OS HERÓIS DO NOSSO MOCK E RETORNA A LISTA COMO UM OBSERVABLE
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //o "of" transforma nossa lista de HEROES em um Observable
    this.messageService.add('HeroService: fetched heroes ... esta mensagem venho do método getHeroes() da Service');
    return heroes;  //retorna nossa lista de HEROES (nossa lista mockada de heróis) mas em forma de Observable Assíncrono
  }

  // MÉTODO ESPECÍFICO QUE ENTRA NA LISTA DE TODOS OS HERÓIS E CAPTURA APENAS O HERÓI PELO ID, E RETORNA O HERÓI COMO UM OBSERVABLE
  getHeroById(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id} ... esta mensagem venho do método getHeroById() da Service`);
    return of(hero);
  }
}
