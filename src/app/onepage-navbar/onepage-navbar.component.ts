import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-onepage-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onepage-navbar.component.html',
  styleUrl: './onepage-navbar.component.css',
})
export class OnepageNavbarComponent {
  user: User[] = [
    {
      id: 1,
      username: 'Berkay',
      password: '123456',
      email: 'berkay@gmail.com',
      pictures: 'none',
      date: '2014-16-01',
      link: 'none',
    },
  ];

  navBar: {
    isLogin: boolean;
    logo: {
      logoName: string;
      logoFontAwesome: string;
      logoPicture: string;
      logoLink: string;
      logoTitle: string;
    };
    navbar: Array<any>;
    search: {
      name: string;
      placeholder: string;
      type: string;
      style: string;
    };
  } = {
    isLogin: false,
    logo: {
      logoName: 'Logo',
      logoFontAwesome: 'fa-solid fa-code-branch',
      logoPicture:
        'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg',
      logoLink: '/',
      logoTitle: 'Title',
    },
    navbar: [
      {
        id: 1,
        name: 'Anasayfa',
        link: '/',
        fontAwesome: 'fa-solid fa-house-chimney',
      },
      { id: 2, name: 'AboutMe', link: '/about-me', fontAwesome: 'font-2' },
      { id: 3, name: 'Blog', link: '/blog', fontAwesome: 'font-3' },
      { id: 4, name: 'Contact', link: '/contact', fontAwesome: 'font-4' },
    ],
    search: {
      name: 'Search',
      placeholder: 'Arama için ...',
      type: 'text',
      style: 'btn btn-primary',
    },
  };
}
