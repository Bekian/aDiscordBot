"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDiscordEventListener_1 = require("../functions/createDiscordEventListener");
exports.default = (0, createDiscordEventListener_1.createDiscordEventListener)('interactionCreate', (client, interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isChatInputCommand() || !interaction.inCachedGuild())
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        yield command.data.execute(client, interaction);
    }
    catch (error) {
        console.error(`Error executing ${interaction.commandName}`);
        console.error(error);
    }
}));
