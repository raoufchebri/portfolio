import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getAll(userId: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.BASE_URL}?userId=${userId}`);
  }
  get(postId: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.BASE_URL}/${postId}`).pipe(delay(1000));
  }
}
