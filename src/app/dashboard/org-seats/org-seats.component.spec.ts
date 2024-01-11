import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSeatsComponent } from './org-seats.component';

describe('OrgSeatsComponent', () => {
  let component: OrgSeatsComponent;
  let fixture: ComponentFixture<OrgSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
