import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';
import { OnepageProjectNameComponent } from './onepage-project-name/onepage-project-name.component';
import { NgFor } from '@angular/common';
import { OnepageNavbarComponent } from './onepage-navbar/onepage-navbar.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    OnepageHeaderComponent,
    OnepageFooterComponent,
    OnepageMainComponent,
    OnepageProjectNameComponent,
    OnepageNavbarComponent,
  ],
})
export class AppComponent {
  name = 'Berkay';
  surname = 'Anduv';
  projectName = 'Single Page App';
}
