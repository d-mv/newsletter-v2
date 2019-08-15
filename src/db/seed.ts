import faker from 'faker';

import { Document } from 'mongoose';
import User from './models/user';
import Group from './models/group';
import Source from './models/source';
import Post from './models/post';
import PostLog from './models/postLog';

type MongooseResult = Document[];

export interface CSources {
  users: MongooseResult;
  groups: MongooseResult;
}

const createGroups = async (users: MongooseResult) => await Group.find({});
const createSources = async ({ users, groups }: CSources) => await Source.find({});
const createPosts = async (sources: MongooseResult) => await Post.find({});
const createPostLogs = async (posts: MongooseResult) => await PostLog.find({});

export const dbSeed = async () => {
  try {
    const users = await User.find({});
    let groups = await Group.find({});

    if (!groups) groups = await createGroups(users);
    const sources = await createSources({ users, groups });
    const posts = await createPosts(sources);
    const logs = await createPostLogs(posts);

    return {
      message: `Seeding is done - ${users.length} user(s), ${groups.length} group(s), ${
        sources.length
      } source(s), ${posts.length} post(s), ${logs.length} log(s),`
    };
  } catch (e) {
    return e;
  }
};
