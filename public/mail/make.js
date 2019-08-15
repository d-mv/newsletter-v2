"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
exports.makeEmail = (url) => {
    const content = {
        title: 'email.title',
        paragraph: 'email.paragraph',
        button: 'email.button',
        copy: 'email.copy',
        thanks: 'email.thanks'
    };
    return {
        text: _1.emailText(content, encodeURI(url), 'ltr'),
        html: _1.emailHtml(content, encodeURI(url), 'ltr')
    };
};
//# sourceMappingURL=make.js.map