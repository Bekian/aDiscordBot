import { SlashCommandBuilder } from "discord.js";
import { Command } from "../structures/Command";


export default new Command  ({
	data : new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(client, interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
});