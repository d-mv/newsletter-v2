const express = require('express');

import authenticate from '../../middleware/auth';
import { ObjectID } from 'mongodb';

const Post = require('../../db/models/post');
const PostLog = require('../../db/models/postLog');

const router = new express.Router();

// Create
router.post('/', async (req: any, res: any) => {
  try {
    const log = PostLog.find({ url: req.body.url });

    // if new
    if (!log) {
      const post = new Post(req.body);
      await post.save();
      const postLog = new PostLog({ url: post.url, postId: post._id });
      await postLog.save();
      const posts = await Post.find({}).sort('-publishedAt');
      res.status(201).send(posts);
    }
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// All
router.get('/', authenticate, async (req: any, res: any) => {
  try {
    const posts = await Post.find({}).sort('-publishedAt');

    Object.keys(posts).forEach((_value: string, index: number) => {
      posts[index].text = posts[index].text.slice(0, 800)+'...';
    });

    res.status(201).send(posts);
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
    const post = await Post.findById(_id);
    res.status(201).send(post);
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
    const post = await Post.findById(_id);

    updates.forEach(update => (post[update] = req.body[update]));
    await post.save();

    const posts = await Post.find({}).sort('-publishedAt');
    res.status(201).send(posts);
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
    const deletePost = await Post.deleteOne({ _id });
    if (!deletePost) {
      return res.status(404).send();
    }
    const posts = await Post.find({}).sort('-publishedAt');
    res.status(201).send(posts);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});

export default router;
