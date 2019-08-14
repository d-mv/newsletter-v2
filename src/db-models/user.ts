// const mongoose = require("mongoose");
import * as mongoose from 'mongoose';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { UserType } from '../models';

const dotEnv = dotenv.config();
const secret: any = process.env.SECRET;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 7,
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
  status: { type: Boolean, required: true, default: false },
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
  // await Post.deleteMany({ createdBy: user._id });
  next();
});

const User = mongoose.model('User', UserSchema);
export default User;
// module.exports = User;
