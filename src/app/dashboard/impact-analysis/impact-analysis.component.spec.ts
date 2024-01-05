import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactAnalysisComponent } from './impact-analysis.component';

describe('ImpactAnalysisComponent', () => {
  let component: ImpactAnalysisComponent;
  let fixture: ComponentFixture<ImpactAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
