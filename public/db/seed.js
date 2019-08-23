"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const User = require('./models/user');
const Group = require('./models/group');
const Source = require('./models/source');
const Post = require('./models/post');
const PostLog = require('./models/postLog');
const createGroups = (users) => __awaiter(this, void 0, void 0, function* () {
    try {
        users.forEach((user) => __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 3; i++) {
                const newGroup = new Group({
                    name: faker_1.default.lorem.sentence(),
                    userId: user._id
                });
                yield newGroup.save();
            }
        }));
        return yield Group.find({});
    }
    catch (e) {
        console.log(e);
    }
});
const createData = (groups) => __awaiter(this, void 0, void 0, function* () {
    try {
        groups.forEach((group) => __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < 5; i++) {
                const newSource = new Source({
                    name: faker_1.default.lorem.words(3),
                    url: faker_1.default.internet.url(),
                    groupId: group._id,
                    userId: group.userId
                });
                yield newSource.save();
                for (let i = 0; i < 5; i++) {
                    const newPost = new Post({
                        title: faker_1.default.lorem.sentence(),
                        author: `${faker_1.default.name.firstName} ${faker_1.default.name.lastName}`,
                        url: faker_1.default.internet.url(),
                        text: faker_1.default.lorem.paragraphs(5),
                        read: Math.random() > 0.5,
                        readTime: Math.ceil(Math.random() * 10),
                        pages: Math.ceil(Math.random() * 10),
                        published: faker_1.default.date.past(0),
                        sourceId: newSource._id,
                        userId: group.userId
                    });
                    yield newPost.save();
                    const newLog = new PostLog({
                        url: newPost.url,
                        postId: newPost._id
                    });
                    yield newLog.save();
                }
            }
        }));
    }
    catch (e) {
        console.log(e);
    }
});
exports.dbSeed = () => __awaiter(this, void 0, void 0, function* () {
    console.log('in dbSeed');
    try {
        const users = yield User.find({});
        let groups = yield Group.find({});
        if (groups.length === 0)
            groups = yield createGroups(users);
        yield createData(groups);
        return { message: 'Seeding is done' };
    }
    catch (e) {
        return e;
    }
});
//# sourceMappingURL=seed.js.map