import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  link1 = [
    '/',
    {
      outlets: {
        'outlet-a': ['page-red'],
        'outlet-b': ['page-green'],
        'outlet-c': ['page-blue'],
      },
    },
  ];
  link2 = [
    '/',
    {
      outlets: {
        'outlet-a': ['page-red'],
        'outlet-b': ['page-blue'],
        'outlet-c': ['page-green'],
      },
    },
  ];
}
