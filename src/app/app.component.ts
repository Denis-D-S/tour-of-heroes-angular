import { Component } from '@angular/core';
import {MediaQueryService} from "./mediaQueryService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour Of Heroes';

  constructor( public mediaQueryService: MediaQueryService) {

  }




}
