import { Component } from '@angular/core';

@Component({
  selector: 'app-onepage-header',
  standalone: true,
  imports: [],
  templateUrl: './onepage-header.component.html',
  styleUrl: './onepage-header.component.css',
})
export class OnepageHeaderComponent {
  header: string = 'Angular Eğitimine Hoşgeldiniz';
  title: string = 'Html5,Css3, Javascript, Ecmascript, Typescript, Angular';
  socialLinkedin: string = 'Linkedin';
  socialGithub: string = 'GitHub';
  socialYoutube: string = 'Youtube';
  socialBlogger: string = 'Blogger';
}
