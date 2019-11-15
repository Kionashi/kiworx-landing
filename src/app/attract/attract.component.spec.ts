import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractComponent } from './attract.component';

describe('AttractComponent', () => {
  let component: AttractComponent;
  let fixture: ComponentFixture<AttractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
