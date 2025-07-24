import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-loader',
  standalone: false,
templateUrl: './resume-loader.component.html'
})
export class ResumeLoaderComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  steps: string[] = [
    'Parsing your resume',
    'Analyzing your experience',
    'Extracting your skills',
    'Generating recommendations'
  ];

  currentStep = 0;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateSteps();
    }
  }

  animateSteps() {
    const interval = setInterval(() => {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;
      } else {
        clearInterval(interval);
        this.loadingComplete.emit(); // ✅ Trigger event after last step
      }
    }, 1200);
  }
}
