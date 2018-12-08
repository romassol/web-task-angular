import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionInformationComponent } from './addition-information.component';

describe('AdditionInformationComponent', () => {
  let component: AdditionInformationComponent;
  let fixture: ComponentFixture<AdditionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
