import { CommentType } from '../comment/comment.type';

type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: Array<CommentType>;
};

export type { PostType };
