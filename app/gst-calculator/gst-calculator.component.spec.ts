import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSTCalculatorComponent } from './gst-calculator.component';

describe('GSTCalculatorComponent', () => {
  let component: GSTCalculatorComponent;
  let fixture: ComponentFixture<GSTCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GSTCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GSTCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
