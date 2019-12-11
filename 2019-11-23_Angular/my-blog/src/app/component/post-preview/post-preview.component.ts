import {Component, Input, OnInit} from '@angular/core';
import {PostDto} from '../../dto/PostDto';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  maxLength = 50;

  @Input()
  post: PostDto;

  constructor() { }

  postLink: string;

  ngOnInit() {
    this.postLink = '/post/' + this.post.id;
  }

  shortenString(str: string): string {
    if (str.length < this.maxLength) { return str; }
    return str.substring(0, this.maxLength) + '...';
  }

}
