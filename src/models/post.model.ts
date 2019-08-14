import { ObjectId } from 'mongodb';

export interface PostType {
  id: ObjectId;
  title: string;
  author: string;
  url: string;
  text: string;
  characters: number;
  created: Date;
  parsed: Date;
  sourceId: ObjectId;
  createdAt: Date;
}
