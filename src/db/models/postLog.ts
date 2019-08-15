import mongoose from 'mongoose';

const PostLogSchema = new mongoose.Schema({
  url: {
    type: String,
    trim: true,
    minLength: 3,
    unique: true,
    required: true
  },
  postId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post' },
  createdAt: { type: Date, default: Date.now }
});

PostLogSchema.virtual('posts', {
  ref: 'Post',
  localField: 'postId',
  foreignField: '_id'
});

const PostLog = mongoose.model('PostLog', PostLogSchema);

module.exports= PostLog;
