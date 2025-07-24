import { Component } from '@angular/core';

@Component({
  selector: 'app-score-card',
  standalone: false,
templateUrl: './score-card.component.html',
})
export class ScoreCardComponent {
  score = 58;
  issues = 21;

  sections = [
    {
      label: 'Tailoring',
      score: '??',
      color: 'bg-yellow-200 text-yellow-900',
      isOpen: false,
      description: ['Hard Skills', 'Soft Skills', 'Action Verbs', 'Tailored Title']
    },
    {
      label: 'Content',
      score: '51',
      color: 'bg-pink-100 text-pink-600',
      isOpen: false,
      description: ['Quantifying Impact', 'Repetition', 'Spelling & Grammar']
    },
    {
      label: 'Section',
      score: '81',
      color: 'bg-yellow-200 text-yellow-900',
      isOpen: false,
      description: ['Education', 'Experience', 'Projects', 'Certifications']
    },
    {
      label: 'ATS Essentials',
      score: '83',
      color: 'bg-yellow-200 text-yellow-900',
      isOpen: false,
      description: ['ATS Parse Rate', 'Keyword Optimization', 'Formatting']
    }
  ];

  toggle(index: number): void {
  this.sections.forEach((section, i) => {
    section.isOpen = i === index ? !section.isOpen : false;
  });
}

}
