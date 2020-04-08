import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;
  @Input() value: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
