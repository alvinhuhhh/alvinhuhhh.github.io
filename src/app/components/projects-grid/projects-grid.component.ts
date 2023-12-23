import { Component, Input } from '@angular/core';
import { Project } from 'src/app/projects/project';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {
  @Input() projects: Project[] = [];
}
