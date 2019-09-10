import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://api.fashbash.co/api/feed';

  constructor(private http: HttpClient) { }

  getFeed(page: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    return this.http.get(this.BASE_URL, { params });
  }
}
