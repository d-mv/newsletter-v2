import mongoose from 'mongoose';
const Post = require('./post');

const SourceSchema = new mongoose.Schema({
  name: { type: String, trim: true, minLength: 3, unique: true, required: true },
  url: { type: String, trim: true, minLength: 3, unique: true, required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Group' },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

SourceSchema.pre('remove', async function(next: any) {
  const source = this;
  await Post.deleteMany({ sourceId: source._id });
  next();
});

SourceSchema.virtual('users', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id'
});
SourceSchema.virtual('groups', {
  ref: 'Group',
  localField: 'groupId',
  foreignField: '_id'
});
SourceSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'sourceId'
});

const Source = mongoose.model('Source', SourceSchema);

module.exports = Source;
