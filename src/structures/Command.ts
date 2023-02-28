import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { CatClient } from "./CatClient"

export interface ICommandData {
    data: SlashCommandBuilder
    // define more properties of your commands here 
    execute: (client: CatClient, cmd: ChatInputCommandInteraction<'cached'>) => void | Promise<void>
} 

export class Command {
    constructor(public readonly data: ICommandData) {} 
} 