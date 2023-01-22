import axios from 'axios';
import { load } from "ts-dotenv";
import { CurrencyEnum, ICurrency, ICurrencyResponse } from "./enumCurrency";

////https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const env = load({
  API: String
});

const instance = axios.create({
  baseURL: env.API,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

const currencyMap: Map<string, string> = new Map
currencyMap.set("dolar-real", CurrencyEnum.DOLAR_REAL);
currencyMap.set("euro-real", CurrencyEnum.EURO_REAL);
currencyMap.set("btc-real", CurrencyEnum.BTC_REAL);
currencyMap.set("btc-dolar", CurrencyEnum.BTC_DOLAR);
currencyMap.set("btc-euro", CurrencyEnum.BTC_EURO);

export const currencyAPI = async (commandName: string) => {
  try {
    const { data } = await instance.get(`/last/${currencyMap.get(commandName)}`);
    const currency = Object.entries(data)[0][1] as ICurrency;
    const response: ICurrencyResponse = {
      code: currency.code,
      text: formatBotMessage(currency)
    }
    return response;
  } catch (error) {
    console.log('error[currencyAPI] :>> ', error);
  }

}
function formatBotMessage(currency: ICurrency): string {
  return `Compra:${currency.bid}\nVenda:${currency.ask}\nAlta do dia:${currency.high}\nBaixa do dia: ${currency.low} `
}

// export const dollarRealAPI = async () => {
//   try {
//     const { data } = await instance.get('/last/USD-BRL');
//     const { USDBRL } = data;
//     return formatBotMessage(USDBRL);
//   } catch (error) {
//     console.log('error[dollarReal] :>> ', error);
//   }
// }

// export const euroRealAPI = async () => {
//   try {
//     const { data } = await instance.get('/last/EUR-BRL');
//     const { EURBRL } = data;
//     return formatBotMessage(EURBRL);
//   } catch (error) {
//     console.log('error[euroReal]:>> ', error);
//   }
// }

// export const btcRealAPI = async () => {
//   try {
//     const { data } = await instance.get('/last/BTC-BRL');
//     const { BTCBRL } = data;
//     return formatBotMessage(BTCBRL);
//   } catch (error) {
//     console.log('error[btcReal] :>> ', error);
//   }
// }

// export const btcDollarAPI = async () => {
//   try {
//     const { data } = await instance.get('/last/BTC-USD');
//     const { BTCUSD } = data;
//     return formatBotMessage(BTCUSD);
//   } catch (error) {
//     console.log('error[btcDollar] :>> ', error);
//   }
// }

// export const btcEuroAPI = async () => {
//   try {
//     const { data } = await instance.get('/last/BTC-EUR');
//     const { BTCEUR } = data;
//     return formatBotMessage(BTCEUR);
//   } catch (error) {
//     console.log('error[btcEuro] :>> ', error);
//   }
// }


//Comprar: <valor>, Venda: <Valor>, Alta do dia: <Valor>, Baixa do dia:<Valor>
