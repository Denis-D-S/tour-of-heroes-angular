import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    //ASSÍNCRONO:
    const heroes = of(HEROES);
    return heroes;  //retorna nossa lista de HEROES (nossa lista mockada de heróis) mas em forma de Observable Assíncrono

    //SÍNCRONO
    //return HEROES; //retorna nossa lista de HEROES (nossa lista mockada de heróis)
  }
}
