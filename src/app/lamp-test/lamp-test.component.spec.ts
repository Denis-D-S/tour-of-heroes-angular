import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LampTestComponent } from './lamp-test.component';

describe('LampTestComponent', () => {
  let component: LampTestComponent;
  let fixture: ComponentFixture<LampTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LampTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LampTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
