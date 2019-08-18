"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
require("./db/connect");
const user_routes_1 = __importDefault(require("./routes/api/user.routes"));
const source_routes_1 = __importDefault(require("./routes/api/source.routes"));
const post_routes_1 = __importDefault(require("./routes/api/post.routes"));
const group_routes_1 = __importDefault(require("./routes/api/group.routes"));
const utils_routes_1 = __importDefault(require("./routes/api/utils.routes"));
const verify_routes_1 = __importDefault(require("./routes/verify.routes"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(compression_1.default());
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(cookie_parser_1.default());
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use('/api/users', user_routes_1.default);
app.use('/api/groups', group_routes_1.default);
app.use('/api/sources', source_routes_1.default);
app.use('/api/posts', post_routes_1.default);
app.use('/verify', verify_routes_1.default);
app.use('/api/utils', utils_routes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build/')));
app.get('/index.html', (req, res) => {
    res.sendFile(path_1.default.join(__dirname + '../client/build/index.html'));
});
app.listen(port, () => {
    console.log('server is up on ' + port);
});
//# sourceMappingURL=index.js.map