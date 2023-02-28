import { createDiscordEventListener } from "../functions/createDiscordEventListener";

export default createDiscordEventListener('ready', (client) => {
	console.log(`Ready! logged in as ${client.user.tag}`)
})
