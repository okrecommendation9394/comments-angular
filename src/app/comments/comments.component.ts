import {
  Component,
  ElementRef,
  Input,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
} from '@angular/core';
import { Comment, Reply } from '../comment-types.model';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  mainUser: string = 'juliusomo';
  @Input() comments: any[] = [];
  @Output() addingReplies = new EventEmitter<number>();
  @ViewChildren('commentText') commentText: any;
  @ViewChildren('replyText') replyText: any;
  commentId: number = 0;
  showReplyBox: boolean[] = [];
  activateUpdateButton: boolean[] = [];
  popupActive = false;
  overlayActive = false;
  selectedComment: number = 0;
  appendPopup() {
    this.popupActive = !this.popupActive;
    this.overlayActive = !this.overlayActive;
  }
  deleteComment(index: number) {
    if (this.comments[index].user.username === this.mainUser) {
      this.comments.splice(index, 1);
    }
    this.popupActive = false;
    this.overlayActive = false;
  }
  deleteReply(commentIndex: number, replyIndex: number) {
    if (
      this.comments[commentIndex].replies[replyIndex].user.username ===
      this.mainUser
    ) {
      this.comments[commentIndex].replies.splice(replyIndex, 1);
    }
    this.popupActive = false;
    this.overlayActive = false;
  }
  updateCommentContent(index: number) {
    this.activateUpdateButton[index] = false;
    this.commentText.toArray()[index].nativeElement.contentEditable = false;
  }
  makeCommentEditable(index: number) {
    this.activateUpdateButton[index] = true;
    this.commentText.toArray()[index].nativeElement.contentEditable = true;
  }
  makeReplyEditable(i: number, j: number) {
    this.commentId++;
    this.replyText.toArray()[this.commentId].nativeElement.contentEditable =
      this.replyText.toArray()[this.commentId].nativeElement.contentEditable;
    true;
  }
  updateReplyContent(i: number, j: number) {}
  icreaseCommentScore(index: number) {
    this.comments[index].score++;
    this.comments.sort((a, b) => b.score - a.score);
  }
  decreaseCommentScore(index: number) {
    this.comments[index].score--;
    this.comments.sort((a, b) => b.score - a.score);
  }
  icreaseReplyScore(commentIndex: number, replyIndex: number) {
    +this.comments[commentIndex].replies[replyIndex].score++;
    this.comments[commentIndex].replies.sort(
      (a: Reply, b: Reply) => b.score - a.score
    );
  }
  decreaseReplyScore(commentIndex: number, replyIndex: number) {
    +this.comments[commentIndex].replies[replyIndex].score--;
    this.comments[commentIndex].replies.sort(
      (a: Reply, b: Reply) => b.score - a.score
    );
  }
  openReplyBox(index: number) {
    this.selectedComment = index;
    this.showReplyBox[index] = this.showReplyBox[index] ? false : true;
  }
  onReplyCreated(reply: Reply) {
    this.commentId = reply.id;
    this.selectedComment = reply.replyingTo;
    this.comments[this.selectedComment].replies.push(reply);
  }
}
