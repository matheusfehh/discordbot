import { CommandInteraction, Client, Interaction } from "discord.js";
import { centralizeCommands } from "../commands/centralizeCommands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = centralizeCommands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        interaction.followUp({ content: "Deu ruim aqui. :|" });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
};