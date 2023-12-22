import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss'],
})
export class ProjectTileComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgSrc: string = '';
  @Input() imgAlt: string = 'assets/Hero.png';
  @Input() btn1Title: string = '';
  @Input() btn2Title: string = '';
  @Input() btn1OnClick: () => void = () => {};
  @Input() btn2OnClick: () => void = () => {};
}
