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
const express = require('express');
const mail_1 = require("../../mail");
const auth_1 = __importDefault(require("../../middleware/auth"));
const User = require('../../db/models/user');
const router = new express.Router();
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = new User(req.body);
        const token = yield user.newAuthToken();
        const url = `https://the-new-place/user/verify?id=${token}`;
        const send = yield mail_1.sendEmail(user.email, url);
        const message = 'Verification email has been sent';
        res.status(201).send(message);
    }
    catch (e) {
        console.log(e);
        res.status(400).send(e.errmsg ? e.errmsg : e);
    }
}));
router.post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const user = yield User.checkValidCredentials(req.body.email, req.body.password);
        if (user.activated) {
            const token = yield user.newAuthToken();
            const today = new Date();
            const expires = new Date(today.setDate(today.getDate() + 30));
            res
                .cookie('token', token, {
                domain: 'localhost',
                httpOnly: true,
                expires
            })
                .send({ user, token });
        }
        else {
            const message = 'Your account has not been verified';
            res.send({ message });
        }
    }
    catch (error) {
        res.status(400).send({ message: error.toString() });
    }
}));
router.get('/check', auth_1.default, (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { _id } = req.user;
        res.send({
            user: { _id }
        });
    }
    catch (error) {
        res.status(400).send({ message: error.toString() });
    }
}));
router.post('/logout', auth_1.default, (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        yield req.user.save();
        res.send();
    }
    catch (error) {
        res.status(500).send();
    }
}));
router.post('/logoutall', auth_1.default, (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        req.user.tokens = [];
        yield req.user.save();
        res.send();
    }
    catch (error) {
        res.status(500).send();
    }
}));
exports.default = router;
//# sourceMappingURL=user.routes.js.map