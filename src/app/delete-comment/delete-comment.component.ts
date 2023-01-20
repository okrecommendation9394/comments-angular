import { Component, Input } from '@angular/core';
import { Comment } from '../app.component';
@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss'],
})
export class DeleteCommentComponent {
  @Input() comments: Comment[] = [];
  constructor() {
    console.log(this.comments);
  }
}
