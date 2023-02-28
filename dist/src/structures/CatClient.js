"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatClient = void 0;
const discord_js_1 = require("discord.js");
class CatClient extends discord_js_1.Client {
    constructor() {
        super(...arguments);
        this.commands = new discord_js_1.Collection();
    }
}
exports.CatClient = CatClient;
