export enum CurrencyEnum {
    DOLAR_REAL = 'USD-BRL',
    EURO_REAL = 'EUR-BRL',
    BTC_REAL = 'BTC-BRL',
    BTC_DOLAR = 'BTC-USD',
    BTC_EURO = 'BTC-EUR'
}

export interface ICurrency {
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
  
  export interface ICurrencyResponse{
    lookingFor: string,
    text: string
  }

