import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTailoringComponent } from './resume-tailoring.component';

describe('ResumeTailoringComponent', () => {
  let component: ResumeTailoringComponent;
  let fixture: ComponentFixture<ResumeTailoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeTailoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeTailoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
