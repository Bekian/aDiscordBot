import { Collection, Client } from "discord.js"
import { Command } from "./Command"
export class CatClient extends Client<true> {
    commands = new Collection<string, Command>() 
} 