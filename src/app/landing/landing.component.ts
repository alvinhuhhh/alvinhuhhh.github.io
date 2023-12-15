import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public redirectToGitHub(): void {
    window.open('https://github.com/alvinhuhhh', '_blank');
  }

  public scrollToContactPage(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
