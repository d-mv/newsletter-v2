"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PostLogSchema = new mongoose_1.default.Schema({
    url: {
        type: String,
        trim: true,
        minLength: 3,
        unique: true,
        required: true
    },
    postId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'Post' },
    createdAt: { type: Date, default: Date.now }
});
PostLogSchema.virtual('posts', {
    ref: 'Post',
    localField: 'postId',
    foreignField: '_id'
});
const PostLog = mongoose_1.default.model('PostLog', PostLogSchema);
exports.default = PostLog;
//# sourceMappingURL=postLog.js.map