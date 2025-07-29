import { Component, Input, OnInit } from '@angular/core';
import { text } from 'node:stream/consumers';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexLegend,
  ApexDataLabels,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  stroke: ApexStroke;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
};
@Component({
  selector: 'app-ats-dashboard',
  standalone: false,
  templateUrl: './ats-dashboard.component.html',
  styleUrl: './ats-dashboard.component.scss'
})
export class AtsDashboardComponent implements OnInit {
  score: number = 0;
  targetScore: number = 85;
  chartOptions: Partial<ChartOptions>;

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
      description: '',
      title: ''   
    },
    {
      icon: 'assets/images/google-forms.png',
      key: 'formatting_structure',
      description: '',
      title: ''

    },
    {
      icon: 'assets/images/flash.png',
      key: 'store_actions_verb',
      description: '',
      title: ''
    },
    {
      icon: 'assets/images/increase.png',
      key: 'qualificable_achievements',
      description: '',
      title: ""

    },
    {
      icon: 'assets/images/book.png',
      key: 'readability_clarity',
      description: '',
      title: ""

    },
    {
      icon: 'assets/images/demostration.png',
      key: 'contact_information_accuracy',
      description: '',
      title: ""

    }
  ];

  constructor() {
    this.chartOptions = this.getChartOptions(0); // or from API response
  }

  getChartOptions(score: number): Partial<ChartOptions> {
    return {
      series: [score, 100 - score], // To complete the donut circle
      chart: {
        type: 'donut',
        height: 300,
        width: '100%',
      },
      labels: ['Score', 'Remaining'],
      colors: ['#1C64F2', '#E5E7EB'], // Primary + gray
      stroke: {
        colors: ['transparent'],
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
                fontSize: '18px',
              },
              value: {
                show: true,
                fontSize: '24px',
                offsetY: 10,
                formatter: (val: string) => `${parseInt(val)}%`,
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Score',
                fontSize: '16px',
                formatter: () => `${score}%`,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      }
    };
  }
  

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
    this.chartOptions = this.getChartOptions(+this.resumeScore.resume_score); // or from API response
    // Step 1: Convert resumeScore array to key-value map
    const suggestionMap: { [key: string]: string } = {};
    this.resumeScore.suggestions_for_improvement.forEach((item) => {
      const key = Object.keys(item)[0];
      suggestionMap[key] = item[key];
    });

    // Step 2: Update suggestions array using the map
    this.suggestions = this.suggestions.map((suggestion) => ({
      ...suggestion,
      title: suggestion.key.split('_').join(" "),
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
