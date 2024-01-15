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
      <ul class="list-group list-group-numbered">
        <li class="list-group-item active">{{ projectName }}</li>
        <li class="list-group-item">{{ name }} - {{ surname }}</li>
        <li class="list-group-item">{{ projectAuthor }}</li>
        <li class="list-group-item">{{ projectVersion }}</li>
        <li class="list-group-item">{{ projectYear }}</li>
        <li class="list-group-item">{{ projectKeywords }}</li>
        <li class="list-group-item disabled">Disabled item</li>
      </ul>
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
