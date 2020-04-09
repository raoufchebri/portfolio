import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {

  title = 'Post Template'
  content = `
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa esse itaque sequi enim error molestiae placeat odit in quasi!</p>
  <img src="../../../../assets/images/image.png" alt="">
  `;
  constructor() { }

  ngOnInit() {
  }

}
