import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Comment } from '../app.component';
import { Reply } from '../app.component';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {
  @Input() addingReply: number = 0;
  @Output() commentCreated = new EventEmitter<Comment>();
  @Output() replyCreated = new EventEmitter<Reply>();
  addedCommentText = '';
  id = 3;
  addComment() {
    this.commentCreated.emit({
      id: this.id,
      content: this.addedCommentText,
      createdAt: 'Just now',
      user: {
        image: {
          img: '../../assets/images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
      replies: {},
      score: 0,
    });
    this.addedCommentText = '';
    this.id++;
  }
  addReply() {
    if (true) {
      this.replyCreated.emit({
        content: this.addedCommentText,
        createdAt: 'Just now',
        replyingTo: '',
        score: 0,
        user: {
          image: {
            img: '../../assets/images/avatars/image-juliusomo.webp',
          },
          username: 'juliusomo',
        },
      });
    }
  }
}
