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
const authenticate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const token = req
            .header('Authorization')
            .replace('Bearer', '')
            .trim();
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        const user = yield User.findOne({
            _id: decoded._id,
            'tokens.token': token
        });
        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).send({ error: 'Please authenticate!' });
    }
});
exports.default = authenticate;
//# sourceMappingURL=auth.js.map