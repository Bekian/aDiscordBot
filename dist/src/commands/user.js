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
const discord_js_1 = require("discord.js");
const Command_1 = require("../structures/Command");
exports.default = new Command_1.Command({
    data: new discord_js_1.SlashCommandBuilder()
        .setName("user")
        .setDescription("description"),
    execute(client, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            // interaction.user is the object representing the User who ran the command
            // interaction.member is the GuildMember object, which represents the user in the specific guild
            yield interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        });
    },
});
