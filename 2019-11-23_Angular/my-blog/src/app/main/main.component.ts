import { Component, OnInit } from '@angular/core';
import {PostDto} from '../dto/postDto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  posts: PostDto[] =
    [{id: 1, title: 'first', body: 'firstBody', date: '26.11.2019'},
      {id: 2, title: 'second', body: 'secondBody', date: '26.11.2019'},
      {id: 3, title: 'third', body: 'thirdBody', date: '25.11.2019'}];

  constructor() { }

  ngOnInit() {
  }

}
