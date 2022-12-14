import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTest } from './data-binding-test';

describe('CounterTestComponent', () => {
  let component: DataBindingTest;
  let fixture: ComponentFixture<DataBindingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingTest ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
