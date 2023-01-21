import { Client, ClientOptions } from "discord.js";
import { JorgeEnvHandler } from "./envLoader";

const env = JorgeEnvHandler.envHandler();
console.log('Jorge Acordando...')
const client = new Client({
    intents: []
});

client.login(String(env.TOKEN));
