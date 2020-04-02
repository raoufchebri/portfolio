import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
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
  interests = [
    {
      title: 'Artificial Intelligence',
      imageUrl: '../assets/icons/brain-ai.png'
    },
    {
      title: 'Computer Vision',
      imageUrl: '../assets/icons/artificial-intelligence.png'
    },
    {
      title: 'Basketball',
      imageUrl: '../assets/icons/tactic.png'
    },
    {
      title: 'Astrophysics',
      imageUrl: '../assets/icons/astronomy.png'
    }
  ];
  education = [
    {
      title: 'Masters of Business Administration',
      imageUrl: '../assets/logos/thunderbird.jpg'
    },
    {
      title: 'State Engineer in Computer Science',
      imageUrl: '../assets/logos/esi.jpg'
    },
  ];
  frameworks = [
    {
      title: 'Angular',
      imageUrl: '../assets/logos/angular.png'
    },
    {
      title: 'OpenCV',
      imageUrl: '../assets/logos/opencv.png'
    },
    {
      title: 'React',
      imageUrl: '../assets/logos/react.png'
    },
    {
      title: 'NodeJS',
      imageUrl: '../assets/logos/nodejs.png'
    },
  ];
}
