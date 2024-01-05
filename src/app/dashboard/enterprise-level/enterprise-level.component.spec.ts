import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseLevelComponent } from './enterprise-level.component';

describe('EnterpriseLevelComponent', () => {
  let component: EnterpriseLevelComponent;
  let fixture: ComponentFixture<EnterpriseLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
