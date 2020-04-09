import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skillSet = [
    {
      title: 'Python',
      color: '#FFD13D',
      value: 90,
      url: '../assets/logos/python.png'
    },
    {
      title: 'TypeScript',
      color: '#007ACC',
      value: 90,
      url: '../assets/logos/typescript.png'
    },
    {
      title: 'Java',
      color: '#F34533',
      value: 85,
      url: '../assets/logos/java.png'
    },
    {
      title: 'C#',
      color: '#9B4F97',
      value: 85,
      url: '../assets/logos/csharp.svg'
    },
    {
      title: 'C++',
      color: '#0B78FA',
      value: 80,
      url: '../assets/logos/cpp.png'
    },
    {
      title: 'HTML',
      color: '#F16529',
      value: 80,
      url: '../assets/logos/html.png'
    },
    {
      title: 'CSS',
      color: '#2865F1',
      value: 75,
      url: '../assets/logos/css.svg'
    },
    {
      title: 'JavaScript',
      color: '#F7E139',
      value: 75,
      url: '../assets/logos/javascript.png'
    },
    {
      title: 'SQL',
      color: '#0079D6',
      value: 70,
      url: '../assets/logos/sql.png'
    },
    {
      title: 'Photoshop',
      color: '#2D2657',
      value: 70,
      url: '../assets/logos/photoshop.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
