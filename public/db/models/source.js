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
const post_1 = __importDefault(require("./post"));
const SourceSchema = new mongoose_1.default.Schema({
    name: { type: String, trim: true, minLength: 3, unique: true, required: true },
    url: { type: String, trim: true, minLength: 3, unique: true, required: true },
    groupId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'Group' },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});
SourceSchema.pre('remove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const source = this;
        yield post_1.default.deleteMany({ sourceId: source._id });
        next();
    });
});
SourceSchema.virtual('users', {
    ref: 'User',
    localField: 'userId',
    foreignField: '_id'
});
SourceSchema.virtual('groups', {
    ref: 'Group',
    localField: 'groupId',
    foreignField: '_id'
});
SourceSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'sourceId'
});
const Source = mongoose_1.default.model('Source', SourceSchema);
exports.default = Source;
//# sourceMappingURL=source.js.map