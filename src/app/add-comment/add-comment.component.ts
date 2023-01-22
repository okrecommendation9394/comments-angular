import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Comment, Reply } from '../comment-types.model';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {
  @Output() commentCreated = new EventEmitter<Comment>();
  addedCommentText = '';
  id = 3;
  addComment() {
    this.commentCreated.emit({
      id: this.id,
      content: this.addedCommentText,
      createdAt: 'Just now',
      user: {
        image: {
          img: './assets/images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
      replies: [],
      score: 0,
    });
    this.addedCommentText = '';
    this.id++;
  }
}
