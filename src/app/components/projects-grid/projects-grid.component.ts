import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Page } from './page';
import { Project } from 'src/app/projects/project';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const ANIMATION_TIMING = 500;

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
  animations: [
    trigger('trigger', [
      transition(
        ':increment',
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: '0' }),
            animate(
              ANIMATION_TIMING,
              style({ transform: 'translateX(0)', opacity: '1' })
            ),
          ]),
          query(':leave', [
            animate(
              ANIMATION_TIMING,
              style({ transform: 'translateX(-100%)', opacity: '0' })
            ),
          ]),
        ])
      ),
      transition(
        ':decrement',
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', opacity: '0' }),
            animate(
              ANIMATION_TIMING,
              style({ transform: 'translateX(0)', opacity: '1' })
            ),
          ]),
          query(':leave', [
            animate(
              ANIMATION_TIMING,
              style({ transform: 'translateX(100%)', opacity: '0' })
            ),
          ]),
        ])
      ),
    ]),
  ],
})
export class ProjectsGridComponent implements OnInit {
  @Input() projects: Project[] = [];

  @HostBinding('@trigger') public currentPage: number = 0;
  public paginatedProjects: Page[] = [];
  public displayedProjects: Project[] = [];

  public next(): void {
    if (this.currentPage < this.paginatedProjects.length - 1) {
      this.paginatedProjects[this.currentPage].active = false;

      this.currentPage += 1;

      this.displayedProjects =
        this.paginatedProjects[this.currentPage]?.projects;
      this.paginatedProjects[this.currentPage].active = true;
    }
  }

  public back(): void {
    if (this.currentPage > 0) {
      this.paginatedProjects[this.currentPage].active = false;

      this.currentPage -= 1;

      this.displayedProjects =
        this.paginatedProjects[this.currentPage]?.projects;
      this.paginatedProjects[this.currentPage].active = true;
    }
  }

  ngOnInit() {
    let projectsPerPage: number = 4;
    if (window.innerWidth < 480) {
      projectsPerPage = 2;
    }

    for (let i = 0; i < this.projects.length; i += projectsPerPage) {
      const chunk: Project[] = this.projects.slice(i, i + projectsPerPage);
      const page: Page = {
        projects: chunk,
        active: false,
      };
      this.paginatedProjects.push(page);
    }

    this.displayedProjects = this.paginatedProjects[0]?.projects;
    this.paginatedProjects[0].active = true;
  }
}
