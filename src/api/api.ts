import { load } from "ts-dotenv";
import axios from 'axios';

////https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const env = load({
    API: String
});

const instance = axios.create({
    baseURL: env.API,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const dollarReal = async() => {
  instance.get('/last/USD-BRL')
  .then(data =>{
    console.log('data :>> ', data.data);
  })
  .catch(error =>{
    console.log('API error :>> ', error);
  });
}

export const euroReal = ()=>{
  instance.get('/last/EUR-BRL')
  .then(data =>{
    console.log('data :>> ', data.data);
  })
  .catch(error =>{
    console.log('API error :>> ', error);
  });
}

export const btcReal = ()=>{
  instance.get('/last/BTC-BRL')
  .then(data =>{
    console.log('data :>> ', data.data);
  })
  .catch(error =>{
    console.log('API error :>> ', error);
  });
}

export const btcDollar = ()=>{
  instance.get('/last/BTC-USD')
  .then(data =>{
    console.log('data :>> ', data.data);
  })
  .catch(error =>{
    console.log('API error :>> ', error);
  });
}

export const btcEuro = ()=>{
  instance.get('/last/BTC-EUR')
  .then(data =>{
    console.log('data :>> ', data.data);
  })
  .catch(error =>{
    console.log('API error :>> ', error);
  });
}



