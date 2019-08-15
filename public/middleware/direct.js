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
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User = require('../db/models/user');
const dotEnv = dotenv_1.default.config();
const secret = process.env.SECRET;
const authDirect = (token) => __awaiter(this, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        if (!decoded) {
            throw new Error('malformed');
        }
        const user = yield User.findOne({
            _id: decoded._id,
            'tokens.token': token
        });
        if (!user) {
            throw new Error('expired');
        }
        const update = yield User.updateOne({ _id: decoded._id }, { status: true });
        if (!update) {
            throw new Error();
        }
        return { status: true, message: 'confirmed' };
    }
    catch (error) {
        return { status: false, message: error.message };
    }
});
exports.default = authDirect;
//# sourceMappingURL=direct.js.map