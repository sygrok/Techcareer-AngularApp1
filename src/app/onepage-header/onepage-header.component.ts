import { Component } from '@angular/core';

@Component({
  selector: 'app-onepage-header',
  standalone: true,
  imports: [],
  templateUrl: './onepage-header.component.html',
  styleUrl: './onepage-header.component.css',
})
export class OnepageHeaderComponent {
  navBar: {
    isLogin: boolean;
    navbar: Array<any>;
    search: {};
  } = {
    isLogin: true,
    navbar: [
      {
        id: 1,
        name: 'Main Page',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'Home', link: '/about-me', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '/blog', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '/contact', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Search',
      type: 'text',
    },
  };
}
