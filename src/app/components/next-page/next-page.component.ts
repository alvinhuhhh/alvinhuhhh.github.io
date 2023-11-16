import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css'],
})
export class NextPageComponent {
  @Input() title = '';

  public onClick(): void {
    console.log('scroll to next page');
  }
}
