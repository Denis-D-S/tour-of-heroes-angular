import {Component, OnInit} from '@angular/core';
import {MediaQueryService} from "../services/mediaQueryService";

@Component({
  selector: 'app-meme-test',
  templateUrl: './meme-test.component.html',
  styleUrls: ['./meme-test.component.scss']
})
export class MemeTestComponent implements OnInit {

  constructor(public mediaQueryService: MediaQueryService) { }

  ngOnInit(): void {
  }


}
