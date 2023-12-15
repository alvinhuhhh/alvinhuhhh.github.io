import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  email: string = 'alvin.tan1912@gmail.com';
  github: string = 'github.com/alvinhuhhh';
  linkedin: string = 'linkedin.com/in/atwb96';

  github_url: string = 'https://github.com/alvinhuhhh';
  linkedin_url: string = 'https://www.linkedin.com/in/alvintan96';
}
