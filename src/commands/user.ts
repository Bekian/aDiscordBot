import { SlashCommandBuilder } from "discord.js";
import { Command } from "../structures/Command";


export default new Command  ({
	data : new SlashCommandBuilder()
		.setName("user")
		.setDescription("description"),
	async execute(client, interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
});