import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApiResponseComponent } from './sample-api-response.component';

describe('SampleApiResponseComponent', () => {
  let component: SampleApiResponseComponent;
  let fixture: ComponentFixture<SampleApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleApiResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleApiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
