import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarListComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() value: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
