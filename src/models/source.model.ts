import { ObjectId } from 'mongodb';

export interface SourceType {
  _id: ObjectId;
  name: string;
  url: string;
  groupId: ObjectId;
  userId: ObjectId;
  createdAt: Date;
}
