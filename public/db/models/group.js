"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GroupSchema = new mongoose_1.default.Schema({
    name: { type: String, trim: true, minLength: 3, unique: true, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'User' },
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
const Group = mongoose_1.default.model('Group', GroupSchema);
module.exports = Group;
//# sourceMappingURL=group.js.map