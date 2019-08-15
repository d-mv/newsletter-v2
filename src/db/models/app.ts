import mongoose from 'mongoose';

const AppSchema = new mongoose.Schema({
  updatedAt: { type: Date, default: Date.now, required: true },
  createdAt: { type: Date, default: Date.now }
});

const App = mongoose.model('App', AppSchema);

module.exports = App;
