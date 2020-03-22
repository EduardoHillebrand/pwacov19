import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1 } from './question-1.component';

describe('FormComponent', () => {
  let component: Question1;
  let fixture: ComponentFixture<Question1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
