import { Observable } from 'rxjs';
import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feeds$: Observable<any> = new Observable();

  constructor(private feedservice: FeedService) { }

  ngOnInit() {
    this.feeds$ = this.feedservice.getFeed(0);
  }

}
