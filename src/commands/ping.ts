import { SlashCommandBuilder } from "discord.js";
import { Command } from "../structures/Command";


export default new Command  ({
	data : new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with Pong!"),
	async execute(client, interaction) {
		await interaction.reply('Pong!');
	},
});