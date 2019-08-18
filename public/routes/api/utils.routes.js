"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const db_1 = require("../../db");
const router = new express.Router();
router.get('/seed', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const seed = yield db_1.dbSeed();
        res.status(201).send(Object.assign({}, seed));
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
exports.default = router;
//# sourceMappingURL=utils.routes.js.map