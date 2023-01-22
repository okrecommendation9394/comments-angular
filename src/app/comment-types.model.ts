export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    image: { img: string };
    username: string;
  };
  replies: Reply[];
  score: number;
}
export interface Reply {
  id: any;
  content: string;
  createdAt: string;
  replyingTo: number;
  score: number;
  user: {
    image: {
      img: string;
    };
    username: string;
  };
}
