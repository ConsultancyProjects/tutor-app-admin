import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerticalSidebarComponent } from './admin-vertical-sidebar.component';

describe('AdminVerticalSidebarComponent', () => {
  let component: AdminVerticalSidebarComponent;
  let fixture: ComponentFixture<AdminVerticalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVerticalSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVerticalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
