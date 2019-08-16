export interface PostType {
  _id: string;
  title: string;
  author: string;
  url: string;
  text: string;
  read: boolean;
  star: boolean;
  readTime: number;
  pages: number;
  published: string | Date;
  parsed: string | Date;
  sourceId: string;
  createdAt: string | Date;
}

export interface PostState {
  loading: boolean;
  error: string;
  posts: PostType[];
}

export const INITIAL_POST_STATE = {
  loading: false,
  error: '',
  posts: []
};
