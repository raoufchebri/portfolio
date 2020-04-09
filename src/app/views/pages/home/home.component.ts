import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'portfolio';
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
      title: 'Thunderbird School of Global Management',
      description: 'Masters of Business Administration',
      imageUrl: '../assets/logos/thunderbird.jpg'
    },
    {
      title: 'National School of Computer Science',
      description: 'Engineer in Computer Science',
      imageUrl: '../assets/logos/esi.jpg'
    },
    {
      title: 'Deeplearning.ai',
      description: 'Neural Networks & Deep Learning',
      imageUrl: '../assets/logos/deeplearningai.jpg'
    },
    {
      title: 'OpenCV.org',
      description: 'Computer Vision',
      imageUrl: '../assets/logos/opencv.png'
    },
  ];
  frameworks = [
    {
      title: 'Angular',
      imageUrl: '../assets/logos/angular.png'
    },
    {
      title: 'React',
      imageUrl: '../assets/logos/react.png'
    },
    {
      title: 'NodeJS',
      imageUrl: '../assets/logos/nodejs.png'
    },
    {
      title: 'OpenCV',
      imageUrl: '../assets/logos/opencv.png'
    },
    {
      title: 'Numpy',
      imageUrl: '../assets/logos/numpy.png'
    },
    {
      title: 'TenforFlow',
      imageUrl: '../assets/logos/tensorflow.png'
    },
  ];

  cloud = [
    {
      title: 'Git',
      imageUrl: '../assets/logos/git.png'
    },
    {
      title: 'GitLab',
      imageUrl: '../assets/logos/gitlab.png'
    },
    {
      title: 'VS Team Services',
      imageUrl: '../assets/logos/vsts.png'
    },
    {
      title: 'Firebase',
      imageUrl: '../assets/logos/firebase.png'
    },
    {
      title: 'Azure',
      imageUrl: '../assets/logos/azure2.png'
    },
    {
      title: 'AWS',
      imageUrl: '../assets/logos/aws.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
