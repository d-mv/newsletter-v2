const express = require('express');

import authenticate from '../../middleware/auth';
import { ObjectID } from 'mongodb';
import { PostType } from 'src/models';

const Source = require('../../db/models/source');
const Post = require('../../db/models/post');

const router = new express.Router();

// Create
router.post('/', async (req: any, res: any) => {
  const post = new Post(req.body);
  try {
    await post.save();
    const posts = await Post.find({}).sort('-publishedAt');

    res.status(201).send(posts);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// All
router.get('/', authenticate, async (req: any, res: any) => {
  try {
    const sources = await Source.find({});
    res.status(201).send(sources);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// Read
router.get('/:id', authenticate, async (req: any, res: any) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  try {
    const source = await Source.findById(_id);
    res.status(201).send(source);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// Edit
router.patch('/:id', authenticate, async (req: any, res: any) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  const updates = Object.keys(req.body);
  try {
    const source = await Source.findById(_id);

    updates.forEach(update => (source[update] = req.body[update]));
    await source.save();

    const sources = await Source.find({});
    res.status(201).send(sources);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// Delete source
router.delete('/:id', authenticate, async (req: any, res: any) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  try {
    const deleteSource = await Source.deleteOne({ _id });
    if (!deleteSource) {
      return res.status(404).send();
    }
    const sources = await Source.find({});
    res.status(201).send(sources);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// Read posts for a source
router.get('/:id/posts', authenticate, async (req: any, res: any) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  try {
    const posts: PostType[] = await Post.find({ sourceId: _id });
    Object.keys(posts).forEach((_value: string, index: number) => {
      posts[index].text = posts[index].text.slice(0, 800);
    });
    res.status(201).send(posts);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
export default router;
