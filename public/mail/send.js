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
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const _1 = require("./");
const dotEnv = dotenv_1.default.config();
const login = process.env.LOGIN;
const pass = process.env.PASS;
exports.sendEmail = (user, url) => __awaiter(this, void 0, void 0, function* () {
    let transporter = nodemailer_1.default.createTransport({
        host: 'smtp.yandex.com',
        port: 465,
        secure: true,
        auth: {
            user: login,
            pass: pass
        }
    });
    const { text, html } = _1.makeEmail(url);
    let mailOptions = {
        from: {
            name: 'The Newsletter',
            address: login
        },
        to: user,
        subject: 'Verify your e-mail address',
        text,
        html
    };
    try {
        const result = yield transporter.sendMail(mailOptions);
        console.log('Message %s sent: %s', result.messageId, result.response);
        return result.response;
    }
    catch (e) {
        console.log(e);
        return e;
    }
});
//# sourceMappingURL=send.js.map