import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() body: string;
  date = new Date();
  imageUrl = '../../../assets/images/image.png';

  constructor() { }

  ngOnInit() {
  }

}
