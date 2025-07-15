import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeScoreComponent } from './resume-score.component';

describe('ResumeScoreComponent', () => {
  let component: ResumeScoreComponent;
  let fixture: ComponentFixture<ResumeScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeScoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
