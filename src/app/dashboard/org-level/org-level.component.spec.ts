import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLevelComponent } from './org-level.component';

describe('OrgLevelComponent', () => {
  let component: OrgLevelComponent;
  let fixture: ComponentFixture<OrgLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
