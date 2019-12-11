import { Injectable } from '@angular/core';
import {PostDto} from '../dto/PostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  private posts: PostDto[] = [{id: 1,
    title: 'My first post in this blog',
    // tslint:disable-next-line:max-line-length
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum metus eu tortor aliquet lacinia. Aliquam in justo id ligula mollis porta. Etiam rhoncus urna arcu, sed cursus elit volutpat malesuada. Vivamus tempus sapien tortor, quis varius tellus scelerisque id. In vestibulum nunc lobortis, rutrum nunc sit amet, pretium arcu. Etiam ornare fermentum odio vitae ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ornare interdum iaculis. Praesent nec bibendum leo. Vivamus et metus nisl. Mauris cursus mollis egestas. Fusce congue suscipit magna in pretium. Morbi vulputate congue efficitur.',
    date: '2019-12-10'},
    {id: 2,
      title: 'My second post in this blog',
      // tslint:disable-next-line:max-line-length
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum metus eu tortor aliquet lacinia. Aliquam in justo id ligula mollis porta. Etiam rhoncus urna arcu, sed cursus elit volutpat malesuada. Vivamus tempus sapien tortor, quis varius tellus scelerisque id. In vestibulum nunc lobortis, rutrum nunc sit amet, pretium arcu. Etiam ornare fermentum odio vitae ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ornare interdum iaculis. Praesent nec bibendum leo. Vivamus et metus nisl. Mauris cursus mollis egestas. Fusce congue suscipit magna in pretium. Morbi vulputate congue efficitur.',
      date: '2019-12-10'},
    {id: 3,
      title: 'My third post in this blog',
      // tslint:disable-next-line:max-line-length
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum metus eu tortor aliquet lacinia. Aliquam in justo id ligula mollis porta. Etiam rhoncus urna arcu, sed cursus elit volutpat malesuada. Vivamus tempus sapien tortor, quis varius tellus scelerisque id. In vestibulum nunc lobortis, rutrum nunc sit amet, pretium arcu. Etiam ornare fermentum odio vitae ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ornare interdum iaculis. Praesent nec bibendum leo. Vivamus et metus nisl. Mauris cursus mollis egestas. Fusce congue suscipit magna in pretium. Morbi vulputate congue efficitur.',
      date: '2019-12-10'}
  ];

  getPost(id: number): PostDto {
    for (const post of this.posts) {
      if (post.id === id) { return post; }
    }
    return null;
  }
  getAllPosts(): PostDto[] {
    return this.posts;
  }
}
