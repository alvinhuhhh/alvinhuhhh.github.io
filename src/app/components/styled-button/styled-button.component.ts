import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-button',
  templateUrl: './styled-button.component.html',
  styleUrls: ['./styled-button.component.css'],
})
export class StyledButtonComponent {
  @Input() title: string = '';
  @Input() class: string = 'primary';
  @Input() href: string = '';
  @Input() scrollToPage: boolean = false;

  public onClick(): void {
    if (this.scrollToPage) {
      this.scroll();
    }

    if (this.href !== '') {
      window.location.href = this.href;
    }
  }

  private scroll(): void {
    console.log('Scroll down');
  }
}
