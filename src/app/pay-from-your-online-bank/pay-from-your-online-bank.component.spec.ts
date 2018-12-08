import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFromYourOnlineBankComponent } from './pay-from-your-online-bank.component';

describe('PayFromYourOnlineBankComponent', () => {
  let component: PayFromYourOnlineBankComponent;
  let fixture: ComponentFixture<PayFromYourOnlineBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFromYourOnlineBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFromYourOnlineBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
