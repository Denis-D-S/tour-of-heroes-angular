import { Component } from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-array-study',
  templateUrl: './form-array-study.component.html',
  styleUrls: ['./form-array-study.component.scss']
})
export class FormArrayStudyComponent {
  hobbiesForm = new FormArray([
    new FormControl('reading'),
    new FormControl('hiking'),
    new FormControl('traveling')
  ]);

  addHobby(hobby: string) {
    this.hobbiesForm.push(new FormControl(hobby));
  }

  removeHobby(index: number) {
    this.hobbiesForm.removeAt(index);
  }
}
