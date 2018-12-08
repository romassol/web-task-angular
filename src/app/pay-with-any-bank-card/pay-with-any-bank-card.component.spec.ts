import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayWithAnyBankCardComponent } from './pay-with-any-bank-card.component';

describe('PayWithAnyBankCardComponent', () => {
  let component: PayWithAnyBankCardComponent;
  let fixture: ComponentFixture<PayWithAnyBankCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayWithAnyBankCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayWithAnyBankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
