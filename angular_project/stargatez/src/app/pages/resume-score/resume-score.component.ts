import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-score',
  standalone: false,
templateUrl: './resume-score.component.html',
  styleUrl: './resume-score.component.scss'
})
export class ResumeScoreComponent {
  constructor() { }
  showLoader = true;  // Show loader initially

  // This will be called when loader finishes animation
  handleLoadingComplete() {
    this.showLoader = false;
}
}
