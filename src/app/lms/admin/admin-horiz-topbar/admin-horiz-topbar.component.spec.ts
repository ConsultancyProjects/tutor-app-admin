import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHorizTopbarComponent } from './admin-horiz-topbar.component';

describe('AdminHorizTopbarComponent', () => {
  let component: AdminHorizTopbarComponent;
  let fixture: ComponentFixture<AdminHorizTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHorizTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHorizTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
