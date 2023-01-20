import { Component } from '@angular/core';
import data from '../assets/json/data.json';
export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    image: { img: string };
    username: string;
  };
  replies: {};
  score: number;
}
export interface Reply {
  content: string;
  createdAt: string;
  replyingTo: string;
  score: number;
  user: {
    image: {
      img: string;
    };
    username: string;
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  comments: Comment[] = data.comments;
  constructor() {
    console.log(this.comments);
  }
  onCommentCreated(comment: Comment) {
    this.comments.push(comment);
  }
  onAddingReplies(reply: any) {
    console.log(reply);
  }
}
