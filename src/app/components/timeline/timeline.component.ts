import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  elements = [
    {
      title: 'Business Developer',
      subtitle: 'El Madrassa - September 2017 - February 2020',
      logoUrl : '../assets/logos/elmadrassa.png',
      description: 'El Madrassa is a private school located in one of Algiers\' most affected areas by the 90s civil war. I managed day-to-day operations including:',
      details: [
        'Managed over 70 employees among which 40 teachers, 10 admin staff and 20 other employees',
        'Developed Skooly Management System using Angular, TypeScript, Ngrx, Bootstrap, NodeJS and Firebase as backend',
        'Identified growth opportunities and managed marketing campaigns. Resulted in an 15% student population increase',

      ],
      miniLogoUrls: [
        '../assets/logos/angular.png',
        '../assets/logos/typescript.png',
        '../assets/logos/html.png',
        '../assets/logos/css.svg',
        '../assets/logos/firebase.png',
        '../assets/logos/gitlab.png',
      ]
    },
    {
      title: 'Software Developer Engineer',
      subtitle: 'Microsoft - November 2015 to December 2016',
      logoUrl : '../assets/logos/microsoft.jpg',
      description: 'Projects in Bing, Windows Phone and Windows Universal Store. My work included the following:',
      details: [
        'Designed and developed four automated data pipelines to display Bing Ads performance on dashboard and reports',
        'Extracted, Transformed Petabytes of unstructured data using Azure Data Lake',
        'Developed API using C# and WCF to to automate server usage data extraction and email for insight'
      ],
      miniLogoUrls: [
        '../assets/logos/csharp.svg',
        '../assets/logos/sql.png',
        '../assets/logos/javascript.png',
        '../assets/logos/html.png',
        '../assets/logos/css.svg',
        '../assets/logos/azure2.png',
        '../assets/logos/vsts.png'
      ]
    },
    {
      title: 'Business Developement Consultant',
      subtitle: 'African Development Bank - October 2014 to December 2014',
      logoUrl : '../assets/logos/afdb.jpg',
      description: 'Souk-at-tanmia is an initiative with the objective of combating unemployment in post-revolution Tunisia. As consultants working with the AfDB, my mission was to design a new edition of the project to be launched in 2015 and prepare a proposal for the donors and investors. The work entailed the following: ',
      details: [
        'Planned and scaled up the second edition of Souk Attanmia, a program that offers financial and non-financial assistance to entrepreneurs',
        'Designed an Entrepreneurship Training Program, its curriculum, process, entry and success criteria',
        'Mapped the financial ecosystem and identifying gaps and areas of improvement',
      ],
    },
    {
      title: 'MBA Student',
      subtitle: 'Thunderbird School of Global Management - July 2013 to May 2015',
      logoUrl : '../assets/logos/thunderbird.jpg',
      description: 'Through my time at Thunderbird, I acquired skills that helped me better understand areas such as Program Management, Product Development and Data Analysis',
      details: [
        'Selected as a SHARE Fellow, Thunderbird scholarship for select students including tuition and mentorship',
        'Selected to consult for the African Development Bank as part of the Thunderbird Emerging Market Laboratory',
      ],
    },
    {
      title: 'Technical Evangelist',
      subtitle: 'Microsoft - November 2009 to February 2013',
      logoUrl : '../assets/logos/microsoft.jpg',
      description: 'My mission was to increase developer tools adoption and promote tools, mobile and cloud app development.',
      details: [
        'Provided technical consultation to developers and strategic partners on Visual Studio, Azure, C# and XAML',
        'Managed project lifecycle of Microsoft Imagine Cup; resulted in 60 startups and increasing number of participants by 50%',
        'Delivered over 300 technical presentations on languages and tools for developers and startups which resulted in 100 Store Apps',
      ],
      miniLogoUrls: [
        '../assets/logos/csharp.svg',
        '../assets/logos/sql.png',
        '../assets/logos/azure2.png',
        '../assets/logos/vsts.png'
      ]
    },
    {
      title: 'Software Developer Engineer',
      subtitle: 'LVSC Méditerranée - July 2009 to November 2009',
      logoUrl : '../assets/logos/lvsc.png',
      description: 'LVSC Méditerranée is a startup that develops enterprise location based services such as fleet management',
      details: [
        'Developed the database and the Data Access Logic layer using C#, Entity Framework, Web Services and Visual Studio 2008 as IDE',
        'Developed location based services using ASP.NET, C# and Google Maps API',
        'Collaborated with developers and product owner using Source Safe 2005',
      ],
      miniLogoUrls: [
        '../assets/logos/csharp.svg',
        '../assets/logos/sql.png',
        '../assets/logos/vsts.png'
      ]
    },
    {
      title: 'Computer Science Student',
      subtitle: 'Ecole Nationale Supérieure d\'Informatique - October 2004 to June 2009',
      logoUrl : '../assets/logos/esi.jpg',
      description: 'During my time at l\'ESI, I acquired strong skills in Computer Science, Mathematics and Statistics including:',
      details: [
        'Derivatives, Integrals, Taylor expansion, Principle Component Analysis',
        'Data Structures, Big O notation, graph traversal',
        'Thesis: Jobs classification'
      ],
      miniLogoUrls: [
        '../assets/logos/csharp.svg',
        '../assets/logos/java.png',
        '../assets/logos/sql.png',
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
