import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() elements: {title: string, imageUrl: string}[]

  constructor() { }

  ngOnInit() {
  }

}
