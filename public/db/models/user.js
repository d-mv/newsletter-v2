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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const Source = require('./source');
const dotEnv = dotenv_1.default.config();
const secret = process.env.SECRET;
const UserSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 6,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    activated: { type: Boolean, required: true, default: false },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
UserSchema.statics.checkValidCredentials = (email, password) => __awaiter(this, void 0, void 0, function* () {
    const user = yield User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Wrong password');
    }
    if (!user.activated) {
        throw new Error('Not active');
    }
    return user;
});
UserSchema.methods.newAuthToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const token = jsonwebtoken_1.default.sign({ _id: user.id.toString() }, secret);
        user.tokens = user.tokens.concat({ token });
        yield user.save();
        return token;
    });
};
UserSchema.methods.toJSON = function () {
    const user = this;
    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.tokens;
    return userObj;
};
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        if (user.isModified('password')) {
            user.password = yield bcryptjs_1.default.hash(user.password, 8);
        }
        next();
    });
});
UserSchema.pre('remove', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        yield Source.deleteMany({ userId: user._id });
        next();
    });
});
const User = mongoose_1.default.model('User', UserSchema);
module.exports = User;
//# sourceMappingURL=user.js.map