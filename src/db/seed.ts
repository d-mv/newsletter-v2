import faker from 'faker';
import { Document } from 'mongoose';
import { GroupType } from 'src/models';
const User = require('./models/user');
const Group = require('./models/group');
const Source = require('./models/source');
const Post = require('./models/post');
const PostLog = require('./models/postLog');

const createGroups = async (users: Document[]) => {
  try {
    users.forEach(async user => {
      for (let i = 0; i < 3; i++) {
        const newGroup = new Group({
          name: faker.lorem.sentence(),
          userId: user._id
        });
        await newGroup.save();
      }
    });
    return await Group.find({});
  } catch (e) {
    console.log(e);
  }
};
const createData = async (groups: GroupType[]) => {
  try {
    groups.forEach(async group => {
      for (let i = 0; i < 5; i++) {
        const newSource = new Source({
          name: faker.lorem.words(3),
          url: faker.internet.url(),
          groupId: group._id,
          userId: group.userId
        });
        await newSource.save();
        for (let i = 0; i < 5; i++) {
          const newPost = new Post({
            title: faker.lorem.sentence(),
            author: `${faker.name.firstName} ${faker.name.lastName}`,
            url: faker.internet.url(),
            text: faker.lorem.paragraphs(5),
            read: Math.random() > 0.5,
            readTime: Math.ceil(Math.random() * 10),
            pages: Math.ceil(Math.random() * 10),
            published: faker.date.past(0),
            sourceId: newSource._id
          });
          await newPost.save();
          const newLog = new PostLog({
            url: newPost.url,
            postId: newPost._id
          });
          await newLog.save();
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const dbSeed = async () => {
  console.log('in dbSeed');
  try {
    const users = await User.find({});
    let groups = await Group.find({});
    if (groups.length === 0) {
      console.log('Creating groups...');
      groups = await createGroups(users);
      console.log('Groups created.');
    }
    await createData(groups);
    return { message: 'Seeding is done' };
  } catch (e) {
    return e;
  }
};
