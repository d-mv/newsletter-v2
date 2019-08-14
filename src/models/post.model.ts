import { ObjectId } from 'mongodb';

export interface PostType {
  id: ObjectId;
  title: string;
  author: string;
  url: string;
  text: string;
  read: boolean;
  star: boolean;
  readTime: number;
  pages: number;
  published: Date;
  parsed: Date;
  sourceId: ObjectId;
  createdAt: Date;
}
