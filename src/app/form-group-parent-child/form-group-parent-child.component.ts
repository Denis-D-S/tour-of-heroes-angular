import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-group-parent-child',
  templateUrl: './form-group-parent-child.component.html',
  styleUrls: ['./form-group-parent-child.component.scss']
})
export class FormGroupParentChildComponent {
  parentForm: FormGroup; //o parentForm tem que ser um FormGroup pois este cara vai guardar todos os outros forms internos (que são os campos do formulário)

  secondParentForm: FormGroup;

  constructor(private fb: FormBuilder) {

    //PRIMEIRO PARENT FORM E SEUS 2 FILHOS (childForm e childForm2):
    this.parentForm = this.fb.group({
      childForm: this.fb.group({ //o childForm também é um FormGroup, pois ele vai guardar os campos do formulário
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        telefoneNumber: new FormControl('', [Validators.pattern('^[0-9]+$')]), //ISSO NÃO ESTÁ FUNCIONANDO! ESTAVA TENTANDO FAZER COM QUE O INPUT APENAS ACEITASSE NUMEROS, MAS NÃO ESTÁ DANDO CERTO.
        userIsNotARobot: new FormControl('')
      }),
      childForm2: this.fb.group({ //o childForm2 também é um FormGroup, pois ele vai guardar os campos do formulário
        email: new FormControl(''),
        password: new FormControl(''),
      })
    });

    //SEGUNDO PARENT FORM E SEU 1 FILHO (newUserForm)
    this.secondParentForm = this.fb.group({
      newUserForm: new FormGroup({
        name: new FormControl(''),
        cpf: new FormControl(''),
        age: new FormControl('')
      })

    });
  }

  submitForm() {
    console.log(this.parentForm.value);
    console.log(this.secondParentForm.value);
  }
}



