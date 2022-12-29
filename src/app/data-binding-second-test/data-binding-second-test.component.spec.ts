import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingSecondTestComponent } from './data-binding-second-test.component';

describe('DataBindingSecondTestComponent', () => {
  let component: DataBindingSecondTestComponent;
  let fixture: ComponentFixture<DataBindingSecondTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingSecondTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingSecondTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
