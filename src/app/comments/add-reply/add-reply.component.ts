import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment, Reply } from 'src/app/comment-types.model';
@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.scss'],
})
export class AddReplyComponent {
  addedReplyText: string = '';
  @Output() replyCreated = new EventEmitter<Reply>();
  @Input() selectedComment: number = 0;
  @Input() comments: Comment[] = [];
  id: number = 4;
  addReply() {
    const reply = {
      id: this.id,
      content: this.addedReplyText,
      createdAt: 'Just now',
      replyingTo: this.selectedComment,
      //this.comments[this.selectedComment].user.username,
      score: 0,
      user: {
        image: {
          img: './assets/images/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
    };
    this.id++;
    this.replyCreated.emit(reply);
    this.addedReplyText = '';
  }
}
