import { Client, ClientOptions } from "discord.js";

console.log("Bot is starting...");

const token = process.env.TOKEN;

const client = new Client({
    intents: []
});
client.login(token);

console.log(client); 