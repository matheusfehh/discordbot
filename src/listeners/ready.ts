import { Client } from "discord.js";
import { centralizeCommands } from "../commands/centralizeCommands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(centralizeCommands);

        console.log(`${client.user.username} is online`);
    });
};