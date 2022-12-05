import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //esta messages está sendo atualizado no outro Service, no HeroService, no momento que dá o get para pegar os heroes no mock-heroes.ts
  private messages: string[] = [];

  constructor() {
  }

  add(message: string): void{
    console.log('adding message');
    this.messages.push(message); //método para adicionar mensagens
  }

  clear(): void {
    console.log('clearing messages');
    this.messages = []; //este método é para limpar as mensagens.
  }

  getMessages(): string[] {
    return this.messages;
  }

}
