import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayStudyComponent } from './form-array-study.component';

describe('FormArrayStudyComponent', () => {
  let component: FormArrayStudyComponent;
  let fixture: ComponentFixture<FormArrayStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
