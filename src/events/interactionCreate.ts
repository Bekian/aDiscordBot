import { createDiscordEventListener } from "../functions/createDiscordEventListener";

export default createDiscordEventListener('interactionCreate', async (client, interaction) => {
	if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.data.execute(client, interaction);
	} catch (error) {
		console.error(`Error executing ${interaction.commandName}`);
		console.error(error);
	}
})