"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const dotEnv = dotenv_1.default.config();
const dbUrl = process.env.MONGO_URL;
mongoose_1.default
    .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => {
    console.log('connected to database');
})
    .catch(() => {
    console.log('failed to connect to database');
});
//# sourceMappingURL=connect.js.map