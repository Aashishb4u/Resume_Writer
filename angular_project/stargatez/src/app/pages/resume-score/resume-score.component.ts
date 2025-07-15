import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-score',
  templateUrl: './resume-score.component.html',
  styleUrl: './resume-score.component.scss'
})
export class ResumeScoreComponent {
  showLoader = true;  // Show loader initially

  // This will be called when loader finishes animation
  handleLoadingComplete() {
    this.showLoader = false;
}
}
