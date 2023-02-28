"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const discord_js_1 = require("discord.js");
const config_json_1 = require("../config.json");
const CatClient_1 = require("./structures/CatClient");
const client = new CatClient_1.CatClient({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
const eventsPath = node_path_1.default.join(__dirname, 'events');
const eventFiles = node_fs_1.default.readdirSync(eventsPath).filter((file) => file.endsWith('.ts'));
for (const file of eventFiles) {
    const filePath = node_path_1.default.join(eventsPath, file);
    const event = require(filePath).default;
    const eventName = file.split('.js')[0];
    client.on(eventName, event.bind(client));
}
client.commands = new discord_js_1.Collection();
const commandsPath = node_path_1.default.join(__dirname, 'commands');
const commandFiles = node_fs_1.default.readdirSync(commandsPath).filter((file) => file.endsWith('.ts'));
for (const file of commandFiles) {
    const filePath = node_path_1.default.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}
client.login(config_json_1.token);
