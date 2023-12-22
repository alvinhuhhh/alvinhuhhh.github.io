import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';
import { NextPageComponent } from './components/next-page/next-page.component';
import { ProjectTileComponent } from './components/project-tile/project-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProjectsComponent,
    ContactComponent,
    StyledButtonComponent,
    NextPageComponent,
    ProjectTileComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
