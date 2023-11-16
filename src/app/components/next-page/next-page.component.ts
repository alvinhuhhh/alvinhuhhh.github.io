import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css'],
})
export class NextPageComponent {
  @Input() title = '';

  public onClick(): void {
    window.scrollBy(0, 1000);
  }
}
