import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  article = {
    title: 'Article',
    date: new Date(),
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non molestias rem pariatur facere repudiandae
    iste,
    autem perspiciatis dolor beatae voluptatem?`,
    id: '3d-printing'
  }

  constructor() { }

  ngOnInit() {
  }

}
