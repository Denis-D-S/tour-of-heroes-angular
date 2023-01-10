import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupParentChildComponent } from './form-group-parent-child.component';

describe('FormGroupParentChildComponent', () => {
  let component: FormGroupParentChildComponent;
  let fixture: ComponentFixture<FormGroupParentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupParentChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupParentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
