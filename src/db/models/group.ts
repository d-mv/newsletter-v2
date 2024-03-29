import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
  name: { type: String, trim: true, minLength: 3, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

GroupSchema.virtual('users', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id'
});

GroupSchema.virtual('sources', {
  ref: 'Source',
  localField: '_id',
  foreignField: 'groupId'
});

const Group = mongoose.model('Group', GroupSchema);

// export default Group;
module.exports = Group