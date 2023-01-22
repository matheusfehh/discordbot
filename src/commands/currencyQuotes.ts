import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "src/command";
import { currencyAPI } from "src/api/api";

export const dollarReal: Command = {
    name: "dolar-real",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const res = await currencyAPI("dolar-real");
        const content = res?.text ? res.text : "Acho que dei problema";
        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

export const euroReal: Command = {
    name: "euro-real",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const res = await currencyAPI("euro-real");
        const content = res?.text ? res.text : "Acho que dei problema";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

export const bitCoinReal: Command = {
    name: "btc-real",
    description: "Returns currency relation bitcoin and real br",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const res = await currencyAPI("btc-real");
        const content = res?.text ? res.text : "Acho que dei problema";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

export const bitCoinDollar: Command = {
    name: "btc-dolar",
    description: "Returns currency relation bitcoin and dollar",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const res = await currencyAPI("btc-dolar");
        const content = res?.text ? res.text : "Acho que dei problema";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

export const bitCoinEuro: Command = {
    name: "btc-euro",
    description: "Returns currency relation bitcoin and euro",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const res = await currencyAPI("btc-euro");
        const content = res?.text ? res.text : "Acho que dei problema";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}
