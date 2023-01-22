import { load } from 'ts-dotenv';
import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log("Bot is starting...");

const env = load({
    TOKEN: String
})

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);

client.login(String(env.TOKEN+ '1'))
    .then(res => console.log('Login com sucesso! :)'))
    .catch(error => {
        console.log('error :>> ', error.code);
        console.log('Falha no Login. :/')
    });