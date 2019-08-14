import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserType } from '../../models';
import Group from './group';

const dotEnv = dotenv.config();
const secret: any = process.env.SECRET;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 6,
    required: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  activated: { type: Boolean, required: true, default: false },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.statics.checkValidCredentials = async (email: string, pass: string) => {
  const user: any = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(pass, user.pass);

  if (!isMatch) {
    throw new Error('Wrong password');
  }

  if (!user.status) {
    throw new Error('Not active');
  }

  return user;
};

UserSchema.methods.newAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, secret);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObj: UserType = user.toObject();

  delete userObj.password;
  delete userObj.tokens;

  return userObj;
};

//hash the plain text password before saving
UserSchema.pre('save', async function(next: any) {
  const user: any = this;
  if (user.isModified('pass')) {
    user.pass = await bcrypt.hash(user.pass, 8);
  }
  next();
});

UserSchema.pre('remove', async function(next: any) {
  const user = this;
  await Group.deleteMany({ userId: user._id });
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
