import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-resume-score',
  standalone: false,
  templateUrl: './resume-score.component.html',
  styleUrl: './resume-score.component.scss',
})
export class ResumeScoreComponent {
  id: any;
  errorPopupMessage;
  showErrorPopup = false;

  constructor(private route: ActivatedRoute, public apiService: ApiService, public router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.errorPopupMessage = 'Invalid request. Please try again.';
      this.showErrorPopup = true;
      this.router.navigate(['/']);
      return;
    }
    this.fetchResumeScore();
  }

  closeErrorPopup() {
    this.showErrorPopup = false;
  }

  showLoader = true; // Show loader initially

  fetchResumeScore() {
    this.apiService.parseAtsScore(this.id).subscribe((response: any) => {
      console.log('Resume score:', response);
      this.showLoader = false;
    }, (error: any) => {
      console.error('Error fetching resume score:', error);
      this.showLoader = false;
      this.errorPopupMessage = 'Failed to fetch resume score. Please try again.';
      this.showErrorPopup = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    });
  }

  // This will be called when loader finishes animation
  handleLoadingComplete() {
    this.showLoader = false;
  }
}
