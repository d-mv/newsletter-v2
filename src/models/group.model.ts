import { ObjectId } from 'mongodb';

export interface GroupType {
  id: ObjectId;
  name: string;
  userId: ObjectId;
  created: Date;
}
