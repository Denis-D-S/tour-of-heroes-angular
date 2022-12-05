import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  messages: string[] = [];

  constructor(public messageService: MessageService) {}


}
