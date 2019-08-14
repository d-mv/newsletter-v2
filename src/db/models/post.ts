import mongoose from 'mongoose';
import PostLog from './postLog';

const PostSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true, required: true },
  url: { type: String, trim: true, minLength: 3, required: true, unique: true },
  text: { type: String, trim: true, minLength: 3, required: true },
  read: { type: Boolean, required: true, default: false },
  star: { type: Boolean, required: true, default: false },
  readTime: { type: Number, required: true, default: 0 },
  pages: { type: Number, required: true, default: 0 },
  published: { type: Date, required: true, default: Date.now },
  parsed: { type: Date, required: true, default: Date.now },
  sourceId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Source' },
  createdAt: { type: Date, required: true, default: Date.now }
});

PostSchema.pre('remove', async function(next: any) {
  const post = this;
  await PostLog.deleteMany({ postId: post._id });
  next();
});

PostSchema.virtual('sources', {
  ref: 'Source',
  localField: 'sourceId',
  foreignField: '_id'
});

PostSchema.virtual('postLog', {
  ref: 'PostLog',
  localField: '_id',
  foreignField: 'postId'
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
