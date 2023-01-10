import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group-parent-child',
  templateUrl: './form-group-parent-child.component.html',
  styleUrls: ['./form-group-parent-child.component.scss']
})
export class FormGroupParentChildComponent {
  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      childForm: this.fb.group({
        firstName: new FormControl(''),
        lastName: new FormControl('')
      })
    });
  }
}



