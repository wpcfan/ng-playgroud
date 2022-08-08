import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-red',
  templateUrl: './page-red.component.html',
  styleUrls: ['./page-red.component.scss'],
})
export class PageRedComponent implements OnInit {
  link = [
    '.',
    {
      outlets: {
        'outlet-child-a': ['child'],
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
