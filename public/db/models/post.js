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
const mongoose_1 = __importDefault(require("mongoose"));
const PostLog = require('./postLog');
const PostSchema = new mongoose_1.default.Schema({
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
    sourceId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'Source' },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'User' },
    createdAt: { type: Date, required: true, default: Date.now }
});
PostSchema.pre('remove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = this;
        yield PostLog.deleteMany({ postId: post._id });
        next();
    });
});
PostSchema.virtual('sources', {
    ref: 'Source',
    localField: 'sourceId',
    foreignField: '_id'
});
PostSchema.virtual('users', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id'
});
PostSchema.virtual('postLog', {
    ref: 'PostLog',
    localField: '_id',
    foreignField: 'postId'
});
const Post = mongoose_1.default.model('Post', PostSchema);
module.exports = Post;
//# sourceMappingURL=post.js.map