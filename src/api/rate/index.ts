import { complement, identity, isNil, memoizeWith } from 'ramda';
import assert from 'ts-invariant';

import tokenConfig from 'api/token/token.config';
import { cryptoCompareApiKey } from 'config/constants';
import { ExtendedCluster } from 'utils/types';

import { CandleLimitType, CandleRate } from './CandleRate';
import { MarketRate } from './MarketRate';

const CRYPTO_COMPARE_API_URL = 'https://min-api.cryptocompare.com/data';
const CURRENCY = 'USD';

type OrderbooksResponse = {
  [market: string]: {
    [currency: string]: number;
  };
};

type CandlesResponse = {
  Data: {
    Data: {
      close: number;
      open: number;
      low: number;
      high: number;
      time: number;
    }[];
  };
};

const getRatesCandle = async (symbol: string, type: CandleLimitType): Promise<CandleRate[]> => {
  let path = '/v2';

  // eslint-disable-next-line default-case
  switch (type) {
    case 'last1h':
      path += '/histominute?limit=60';
      break;
    case 'last4h':
      path += '/histominute?limit=240';
      break;
    case 'day':
      path += '/histohour?limit=24';
      break;
    case 'week':
      path += '/histoday?limit=7';
      break;
    case 'month':
      path += '/histoday?limit=30';
      break;
  }

  try {
    const res = await fetch(
      `${CRYPTO_COMPARE_API_URL}${path}&api_key=${cryptoCompareApiKey}&fsym=${symbol}&tsym=${CURRENCY}`,
    );

    if (!res.ok) {
      throw new Error('getRatesCandle something wrong');
    }

    const result = (await res.json()) as CandlesResponse;

    return result.Data.Data.map(
      (rate) => new CandleRate(symbol, type, rate.close, rate.time * 1000),
    );
  } catch (error) {
    console.error(`Can't get rates for ${symbol}:`, error);
    throw new Error(`Can't get rates for ${symbol}`);
  }
};

export interface API {
  getRatesMarkets: () => Promise<MarketRate[]>;
  getRatesCandle: (symbol: string, type: CandleLimitType) => Promise<CandleRate[]>;
}

// The API is a singleton per cluster. This ensures requests can be cached
export const APIFactory = memoizeWith(
  identity,
  (cluster: ExtendedCluster): API => {
    assert(cryptoCompareApiKey, 'Define crypto compare api key in .env');

    const tokenSymbols = tokenConfig[cluster]?.map((token) => token.tokenSymbol) || [];
    tokenSymbols.push('SOL');

    const getRatesMarkets = async (): Promise<Array<MarketRate>> => {
      try {
        const res = await fetch(
          `${CRYPTO_COMPARE_API_URL}/pricemulti?api_key=${cryptoCompareApiKey}&fsyms=${tokenSymbols.join(
            ',',
          )}&tsyms=${CURRENCY}`,
        );

        if (!res.ok) {
          throw new Error('getRatesMarkets something wrong');
        }

        const result = (await res.json()) as OrderbooksResponse;

        const rates = tokenSymbols.map((symbol) =>
          result[symbol] ? new MarketRate(symbol, result[symbol][CURRENCY]) : null,
        );

        return rates.filter(complement(isNil)) as MarketRate[];
      } catch (error) {
        console.error(`Can't get rates for tokens:`, error);
        throw error;
      }
    };

    return {
      getRatesMarkets,
      getRatesCandle,
    };
  },
);
