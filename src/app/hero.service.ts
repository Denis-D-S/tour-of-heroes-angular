import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');

    const heroes = of(HEROES);
    return heroes;  //retorna nossa lista de HEROES (nossa lista mockada de heróis) mas em forma de Observable Assíncrono

  }
}
