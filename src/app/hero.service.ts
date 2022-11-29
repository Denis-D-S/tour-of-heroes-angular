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

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');

    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;  //retorna nossa lista de HEROES (nossa lista mockada de heróis) mas em forma de Observable Assíncrono

  }
}
