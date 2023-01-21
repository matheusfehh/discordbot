import { Client, ClientOptions } from "discord.js";
import { JorgeEnvHandler } from "./envLoader";
import ready from "./listeners/ready";

console.log("Bot is starting...");

const env = JorgeEnvHandler.envHandler();

const client = new Client({
    intents: []
});

ready(client);

client.login(String(env.TOKEN)).then(res => console.log('Login com sucesso! :)')).catch(error => (console.log('Falha no Login. :/')));