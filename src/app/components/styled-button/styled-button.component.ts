import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-button',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.css'],
})
export class StyledButtonComponent {
  @Input() title: string = '';
  @Input() class: string = 'primary';
  @Input() onClick(): void {}
}
