import { ClientEvents } from "discord.js";
import { CatClient } from "../structures/CatClient";

export type DiscordEventListener<K extends keyof ClientEvents> = (client: CatClient, ...args: ClientEvents[K]) => Promise<void> | void 

export function createDiscordEventListener<K extends keyof ClientEvents>(name: K, listener: DiscordEventListener<K>) {
  return listener
}