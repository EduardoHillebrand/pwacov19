import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeRespostasComponent } from './recebe-respostas.component';

describe('RecebeRespostasComponent', () => {
  let component: RecebeRespostasComponent;
  let fixture: ComponentFixture<RecebeRespostasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeRespostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
