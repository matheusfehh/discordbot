import { load } from "ts-dotenv";
import axios from 'axios';
import { IconData } from "@discordjs/builders";

////https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const env = load({
  API: String
});

const instance = axios.create({
  baseURL: env.API,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const dollarRealAPI = async () => {
  try {
    const { data } = await instance.get('/last/USD-BRL');
    const { USDBRL } = data;
    return formatBotMessage(USDBRL);
  } catch (error) {
    console.log('error[dollarReal] :>> ', error);
  }
}

export const euroRealAPI = async () => {
  try {
    const { data } = await instance.get('/last/EUR-BRL');
    const { EURBRL } = data;
    return formatBotMessage(EURBRL);
  } catch (error) {
    console.log('error[euroReal]:>> ', error);
  }
}

export const btcRealAPI = async () => {
  try {
    const { data } = await instance.get('/last/BTC-BRL');
    const { BTCBRL } = data;
    return formatBotMessage(BTCBRL);
  } catch (error) {
    console.log('error[btcReal] :>> ', error);
  }
}

export const btcDollarAPI = async () => {
  try {
    const { data } = await instance.get('/last/BTC-USD');
    const { BTCUSD } = data;
    return formatBotMessage(BTCUSD);
  } catch (error) {
    console.log('error[btcDollar] :>> ', error);
  }
}

export const btcEuroAPI = async () => {
  try {
    const { data } = await instance.get('/last/BTC-EUR');
    const { BTCEUR } = data;
    return formatBotMessage(BTCEUR);
  } catch (error) {
    console.log('error[btcEuro] :>> ', error);
  }
}



dollarRealAPI().then(res => {
  console.log('--[dollarReal]--------')
  console.log(res);
  console.log('----------------------')
});
euroRealAPI().then(res => {
  console.log('--[euroReal]--------')
  console.log(res);
  console.log('----------------------')
});
btcRealAPI().then(res => {
  console.log('--[btcReal]--------')
  console.log(res);
  console.log('----------------------')
});
btcDollarAPI().then(res => {
  console.log('--[btcDollar]--------')
  console.log(res);
  console.log('----------------------')
});
btcEuroAPI().then(res => {
  console.log('--[btcEuro]--------')
  console.log(res);
  console.log('----------------------')
});

interface ICurrency {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: Date;
}

function formatBotMessage(currency: ICurrency): string {
  return `Compra:${currency.bid}\nVenda:${currency.ask}\nAlta do dia:${currency.high}\nBaixa do dia: ${currency.low} `
}

//Comprar: <valor>, Venda: <Valor>, Alta do dia: <Valor>, Baixa do dia:<Valor>
