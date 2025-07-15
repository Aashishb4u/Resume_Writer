import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-loader',
  templateUrl: './resume-loader.component.html'
})
export class ResumeLoaderComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();

  steps: string[] = [
    'Parsing your resume',
    'Analyzing your experience',
    'Extracting your skills',
    'Generating recommendations'
  ];

  currentStep = 0;

  ngOnInit(): void {
    this.animateSteps();
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
