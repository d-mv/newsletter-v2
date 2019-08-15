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
const source_1 = __importDefault(require("./source"));
const GroupSchema = new mongoose_1.default.Schema({
    name: { type: String, trim: true, minLength: 3, unique: true, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});
GroupSchema.pre('remove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = this;
        yield source_1.default.deleteMany({ groupId: group._id });
        next();
    });
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
exports.default = Group;
//# sourceMappingURL=group.js.map