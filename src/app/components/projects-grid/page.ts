import { Project } from 'src/app/projects/project';

export interface Page {
  projects: Project[];
  active: boolean;
}
