import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulPageComponentComponent } from './resul-page-component.component';

describe('ResulPageComponentComponent', () => {
  let component: ResulPageComponentComponent;
  let fixture: ComponentFixture<ResulPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
