import { Component, Input, OnInit } from '@angular/core';
import { text } from 'node:stream/consumers';

@Component({
  selector: 'app-ats-dashboard',
  standalone: false,
  templateUrl: './ats-dashboard.component.html',
  styleUrl: './ats-dashboard.component.scss'
})
export class AtsDashboardComponent implements OnInit {
  score: number = 0;
  targetScore: number = 85;

  @Input() resumeScore: any;

  missingKeywords: string[] = [
    'Microservices',
    'CI/CD',
    'Redux',
    'AWS Lambda',
    'Agile Methodologies'
  ];

  foundKeywords: { term: string; count: number }[] = [
    { term: 'React', count: 6 },
    { term: 'TypeScript', count: 5 },
    { term: 'REST APIs', count: 3 },
    { term: 'Databases', count: 3 }
  ];


  suggestions = [
    {
      icon: 'assets/images/search.png',
      key: 'keyword_optimisation',
      description: ''
    },
    {
      icon: 'assets/images/google-forms.png',
      key: 'formatting_structure',
      description: '',

    },
    {
      icon: 'assets/images/flash.png',
      key: 'store_actions_verb',
      description: '',

    },
    {
      icon: 'assets/images/increase.png',
      key: 'qualificable_achievements',
      description: '',

    },
    {
      icon: 'assets/images/book.png',
      key: 'readability_clarity',
      description: '',

    },
    {
      icon: 'assets/images/demostration.png',
      key: 'contact_information_accuracy',
      description: '',

    }
  ];


  shareBtn() {
    if (navigator.share) {
      navigator.share({
        title: 'Check this out!',
        text: 'Look at this awesome website!',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      alert('Web Share API not supported on this browser.');
    }
  }

  ngOnInit(): void {
    this.animateScore();
    console.log(this.resumeScore, "Test 123");
    // Step 1: Convert resumeScore array to key-value map
    const suggestionMap: { [key: string]: string } = {};
    this.resumeScore.forEach((item) => {
      const key = Object.keys(item)[0];
      suggestionMap[key] = item[key];
    });

    // Step 2: Update suggestions array using the map
    this.suggestions = this.suggestions.map((suggestion) => ({
      ...suggestion,
      title: suggestion.key,
      description: suggestionMap[suggestion.key] || ''
    }));
  }

  animateScore() {
    const interval = setInterval(() => {
      if (this.score < this.targetScore) {
        this.score++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }
}
