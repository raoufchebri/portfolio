import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  data: string;

  constructor() { }

  ngOnInit() {
  }

  public onChange({ editor }: ChangeEvent) {
    this.data = editor.getData();
  }

  onSave() {
    console.log(this.data);
  }

}
