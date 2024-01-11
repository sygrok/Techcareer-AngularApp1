import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onepage-project-name',
  standalone: true,
  imports: [CommonModule],
  // Html5 Url
  // templateUrl: './onepage-header.component.html',
  template: `
    <div>
      <!-- one way data binding -->
      Project Name: <span class="text-primary">Single Page app</span>
      <br />
      Merhabalar <span class="text-primary">Berkay - Anduv</span>
    </div>
    <hr />
  `,
  styleUrl: './onepage-project-name.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnepageProjectNameComponent {
  name: string = 'Berkay';
  surname: string = 'Anduv';
  projectName: String = 'Single Page';
  projectVersion: String = 'v1.0.0'; //Semantic Version
  projectDescription: String = 'One Page Project';
  projectAuthor: String = 'Berkay Anduv';
  projectLicense: String = 'MIT';
  projectRepository: String = '';
  projectKeywords: String = '';
  projectYear: number = 2024;
}
