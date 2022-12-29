import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingTest } from './event-binding-test';

describe('CounterTestComponent', () => {
  let component: EventBindingTest;
  let fixture: ComponentFixture<EventBindingTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingTest ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
