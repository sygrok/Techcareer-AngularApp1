import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnepageHeaderComponent } from './onepage-header/onepage-header.component';
import { OnepageFooterComponent } from './onepage-footer/onepage-footer.component';
import { OnepageMainComponent } from './onepage-main/onepage-main.component';

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
  ],
})
export class AppComponent {
  name = 'Berkay';
  surname = 'Anduv';
  projectName = 'Single Page App';
}
