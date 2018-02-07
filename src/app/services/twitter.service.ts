import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  private url: string = 'https://twitter.com/users/username_available?username='

  constructor(
    private http: HttpClient
  ) { }

  checkUser(username: string): Observable<any> {
    const url = `${this.url}${username}`;
    return this.http.get<any>(url);
  }

}
