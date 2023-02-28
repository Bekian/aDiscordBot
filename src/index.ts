import fs from 'node:fs';
import path from 'node:path';
import { GatewayIntentBits, Collection } from 'discord.js';
import { token } from '../config.json';
import { CatClient } from "./structures/CatClient";

const client = new CatClient({ intents: [GatewayIntentBits.Guilds] });

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith('.ts'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath).default;
    const eventName = file.split('.js')[0]
    client.on(eventName, event.bind(client));
}

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file: string) => file.endsWith('.ts'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.login(token);

