import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-data-binding-test',
  templateUrl: './data-binding-test.html',
  styleUrls: ['./data-binding-test.scss']
})
export class DataBindingTest {

  @Output() bolhas: EventEmitter<any>


  public constructor() {

    this.bolhas = new EventEmitter<any>();
  }

  public clickParaBorbulhar(): any{
    this.bolhas.emit();
  }



}
