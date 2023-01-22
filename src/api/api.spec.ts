import assert from 'assert';
import { describe, it } from 'node:test';
import { currencyAPI } from "./api";

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