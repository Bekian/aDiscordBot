"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createDiscordEventListener_1 = require("../functions/createDiscordEventListener");
exports.default = (0, createDiscordEventListener_1.createDiscordEventListener)('ready', (client) => {
    console.log(`Ready! logged in as ${client.user.tag}`);
});
