import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignTutorsComponent } from './reassign-tutors.component';

describe('ReassignTutorsComponent', () => {
  let component: ReassignTutorsComponent;
  let fixture: ComponentFixture<ReassignTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReassignTutorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
