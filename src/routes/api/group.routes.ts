const express = require('express');

import authenticate from '../../middleware/auth';
import { ObjectID } from 'mongodb';
import { PostType, SourceType } from 'src/models';

const Group = require('../../db/models/group');
const Source = require('../../db/models/source');
const Post = require('../../db/models/post');

const router = new express.Router();

// Create
router.post('/', async (req: any, res: any) => {
  const group = new Group(req.body);
  try {
    await group.save();
    const groups = await Group.find({});

    res.status(201).send(groups);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// All
router.get('/', authenticate, async (req: any, res: any) => {
  try {
    const groups = await Group.find({});
    res.status(201).send(groups);
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
    const group = await Group.findById(_id);
    res.status(201).send(group);
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
    const group = await Source.findById(_id);

    updates.forEach(update => (group[update] = req.body[update]));
    await group.save();

    const groups = await Source.find({});
    res.status(201).send(groups);
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
    const deleteGroup = await Group.deleteOne({ _id });
    if (!deleteGroup) {
      return res.status(404).send();
    }
    const groups = await Source.find({});
    res.status(201).send(groups);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
// Read posts for a source
router.get('/:id/sources', authenticate, async (req: any, res: any) => {
  const _id = req.params.id;
  if (!ObjectID.isValid(_id)) {
    res.status(404).send();
  }
  try {
    const sources: SourceType[] = await Source.find({ groupId: _id });

    res.status(201).send(sources);
  } catch (e) {
    res.status(400).send({ message: e.toString() });
  }
});
export default router;
