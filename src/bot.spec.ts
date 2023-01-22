import assert from 'assert';
import { after, describe, it } from 'node:test';
import { currencyAPI } from "./api/api";
import { Client } from "discord.js";
import { load } from 'ts-dotenv';

const client = new Client({
    intents: []
});

const env = load({
    TOKEN: String
});

describe("Teste API Currency", ()=>{
    it("Deve pesquisar por dolar-real via API", async()=>{
        const name = "dolar-real"
        const res = await currencyAPI(name);
        assert.deepEqual(res?.lookingFor,'USD');
    });

    it("Deve pesquisar por euro-real via API", async()=>{
        const name = "euro-real"
        const res = await currencyAPI(name);
        assert.deepEqual(res?.lookingFor,'EUR');
    });

    it("Deve pesquisar por btc-real via API", async()=>{
        const name = "btc-real"
        const res = await currencyAPI(name);
        assert.deepEqual(res?.lookingFor,'BTC');
    });

    it("Deve pesquisar por btc-dolar via API", async()=>{
        const name = "btc-dolar"
        const res = await currencyAPI(name);
        assert.deepEqual(res?.lookingFor,'BTC');
    });

    it("Deve pesquisar por btc-euro via API", async()=>{
        const name = "btc-euro"
        const res = await currencyAPI(name);
        assert.deepEqual(res?.lookingFor, 'BTC');
    });
});

describe("Teste ligar o bot", () => {
    it("Deve conseguir logar com o token do ambiente", async () => {
        const res = await client.login(String(env.TOKEN));
        assert.deepEqual(res, env.TOKEN);
    });

    it('Deve retornar o nome Jorge, the Translator', () => {
        client.on("ready", () => {
           assert.deepEqual(client.user?.username, "Jorge, the Translator")
        });
    });
    after(()=>{
        process.exit();
    });
})