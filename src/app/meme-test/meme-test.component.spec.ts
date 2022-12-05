import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeTestComponent } from './meme-test.component';

describe('MemeTestComponent', () => {
  let component: MemeTestComponent;
  let fixture: ComponentFixture<MemeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
