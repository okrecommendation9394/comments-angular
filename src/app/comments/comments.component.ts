import {
  Component,
  ElementRef,
  Input,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
} from '@angular/core';
import { Comment } from '../app.component';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  mainUser: string = 'juliusomo';
  @Input() comments: any[] = [];
  @Output() addingReplies = new EventEmitter<number>();
  @ViewChildren('text') text: any;
  @ViewChildren('replyText') replyText: any;
  @ViewChildren('updateButton') updateButton: any;
  showReplyBox: boolean[] = [];
  visible = false;
  popupActive = false;

  deleteComment(index: number) {
    if (this.comments[index].user.username === this.mainUser) {
      this.comments.splice(index, 1);
    }
    //this.popupActive = !this.popupActive;
  }
  deleteReply(commentIndex: number, replyIndex: number) {
    if (
      this.comments[commentIndex].replies[replyIndex].user.username ===
      this.mainUser
    ) {
      this.comments[commentIndex].replies.splice(replyIndex, 1);
    }
  }
  toggleEditable(index: number) {
    const textArr = this.text.toArray();
    const updateBtns = this.updateButton.toArray();
    if (textArr[index].nativeElement.contentEditable.toString() == 'false') {
      textArr[index].nativeElement.contentEditable = true;
    } else {
      textArr[index].nativeElement.contentEditable = false;
    }
  }
  toggleReplyEditable(replyIndex: number, commentIndex: number) {
    const replyTextArray = this.replyText.toArray();
    if (
      replyTextArray[replyIndex].nativeElement.contentEditable.toString() ==
      'false'
    ) {
      replyTextArray[replyIndex].nativeElement.contentEditable = true;
    } else {
      replyTextArray[replyIndex].nativeElement.contentEditable = false;
    }
  }
  icreaseCommentScore(index: number) {
    this.comments[index].score++;
  }
  decreaseCommentScore(index: number) {
    this.comments[index].score--;
  }
  icreaseReplyScore(commentIndex: number, replyIndex: number) {
    +this.comments[commentIndex].replies[replyIndex].score++;
  }
  decreaseReplyScore(commentIndex: number, replyIndex: number) {
    +this.comments[commentIndex].replies[replyIndex].score--;
  }
  openReplyBox(index: number) {
    this.showReplyBox[index] = this.showReplyBox[index] ? false : true;
    console.log(index + ' this is index');
    this.addingReplies.emit(index);
  }
}
