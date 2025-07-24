import { Component, OnInit} from '@angular/core';
import { ScrollService } from './services/scroll.service';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stargatez';

  constructor(public ScrollService: ScrollService) {}

  ngOnInit(): void {
   
  }
}
