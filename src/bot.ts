import { Client, ClientOptions } from "discord.js";
import { JorgeEnvHandler } from "./envLoader";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");

const env = JorgeEnvHandler.envHandler();

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(String(env.TOKEN)).then(res => console.log('Login com sucesso! :)')).catch(error => (console.log('Falha no Login. :/')));