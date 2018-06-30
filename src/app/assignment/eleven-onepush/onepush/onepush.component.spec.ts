import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepushComponent } from './onepush.component';

describe('OnepushComponent', () => {
  let component: OnepushComponent;
  let fixture: ComponentFixture<OnepushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
