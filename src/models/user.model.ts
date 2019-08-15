import { ObjectId } from 'mongodb';

export interface UserType {
  _id: ObjectId;
  email: string;
  password: string;
  tokens: string[];
  status: boolean;
  createdAt: Date;
}
