import { Injectable } from '@angular/core';
import {AuthorDto} from '../../dto/AuthorDto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authorUrl: '/api/author';

  constructor(private http: HttpClient) { }


  saveAuthor(author: AuthorDto) {
    return this.http.post(this.authorUrl, author);
  }
}
