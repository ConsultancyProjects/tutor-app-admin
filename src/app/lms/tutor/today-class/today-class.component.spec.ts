import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayClassComponent } from './today-class.component';

describe('TodayClassComponent', () => {
  let component: TodayClassComponent;
  let fixture: ComponentFixture<TodayClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
