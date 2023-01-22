import { Component } from '@angular/core';
import data from '../assets/json/data.json';
import { Comment, Reply } from './comment-types.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  comments: any[] = data.comments;
  replyIndex: number = 0;
  constructor() {
    console.log(this.comments);
  }
  // getReplyIndex(index: number) {
  //   this.replyIndex = index;
  //   console.log(this.replyIndex + 'fromapp');
  // }
  onCommentCreated(comment: Comment) {
    this.comments.push(comment);
  }
}
