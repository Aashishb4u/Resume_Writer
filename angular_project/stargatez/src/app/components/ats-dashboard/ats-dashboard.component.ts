import { Component, OnInit } from '@angular/core';
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
      title: 'Keyword Optimization',
      description: 'Integrate missing keywords and improve relevance by spreading them throughout your resume.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    },
    {
      icon: 'assets/images/google-forms.png',
      title: 'Formatting & Structure',
      description: 'Ensure a clean, professional structure using standard headings, fonts, and graphics that confuse ATS.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    },
    {
      icon: 'assets/images/flash.png',
      title: 'Strong Action Verbs',
      description: 'Replace generic phrases with impactful verbs like "spearheaded", "managed", and "implemented".',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    },
    {
      icon: 'assets/images/increase.png',
      title: 'Quantifiable Achievements',
      description: 'Add context with measurable results, such as "improved response time by 50%".',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    },
    {
      icon: 'assets/images/book.png',
      title: 'Readability & Clarity',
      description: 'Simplify complex wording and use plain, concise language for ease of reading and scanning.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    },
    {
      icon: 'assets/images/demostration.png',
      title: 'Contact Information Accuracy',
      description: 'Ensure your phone number, email, and LinkedIn profile are up-to-date and error-free.',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, fugit?'
    }
  ];

  ngOnInit(): void {
    this.animateScore();
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
