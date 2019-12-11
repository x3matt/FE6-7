import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../service/post.service';
import {PostDto} from '../../dto/PostDto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  constructor(private route: ActivatedRoute, private postService: PostService) { }

  post: PostDto;

  ngOnInit() {
    const postId = +this.route.snapshot.paramMap.get('id');
    this.post = this.postService.getPost(postId);
  }
}
