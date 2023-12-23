import { Component } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects: Project[] = [
    {
      title: 'Alfred',
      description: 'Telegram butler for the family',
      imgSrc: 'assets/projects/alfred-telegram-page.png',
      btnTitle: 'GitHub',
      btnOnClick: this.alfredLink,
    },
  ];

  public alfredLink(): void {
    window.open('https://github.com/alvinhuhhh/alfred_tan_bot', '_blank');
  }
}
