import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public alfredLink(): void {
    window.open('https://t.me/alfred_tan_bot', '_blank');
  }

  public alfredGitHub(): void {
    window.open('https://github.com/alvinhuhhh/alfred_tan_bot', '_blank');
  }
}
