import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-tailoring',
  templateUrl: './resume-tailoring.component.html',
  styleUrl: './resume-tailoring.component.scss'
})
export class ResumeTailoringComponent {
  jobDesc: string = '';
  issues = [
    {
      title: 'ATS Parse Rate',
      description: `An Applicant Tracking System commonly referred to as ATS is a system used by employers and recruiters to quickly scan a large number of job applications.
A high parse rate of your resume ensures that the ATS can read your resume, experience, and skills. This increases the chance of getting your resume seen by recruiters.`,
      open: false
    },
    {
      title: 'Quantify Impact',
      description: `Any good resume will show the impact you’ve had in previous positions you’ve held.
Quantifying your impact is the key to building a strong application that will get recruiters to invite you for interviews.`,
      open: false
    },
    {
      title: 'Soft Skills',
      description: `Include soft skills like teamwork, communication, adaptability, etc., that reflect your ability to thrive in team environments.`,
      open: false
    }
  ];

  toggle(index: number): void {
    this.issues.forEach((item, i) => {
      item.open = i === index ? !item.open : false;
    });
  }

}
