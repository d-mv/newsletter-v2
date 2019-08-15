import { ObjectId } from 'mongodb';

export interface GroupType {
  _id: ObjectId;
  name: string;
  userId: ObjectId;
  created: Date;
}
