import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionComponentComponent } from './function-component.component';

describe('FunctionComponentComponent', () => {
  let component: FunctionComponentComponent;
  let fixture: ComponentFixture<FunctionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
