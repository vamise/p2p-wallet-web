import type { TokenAccount } from '@p2p-wallet-web/core';
import { NATIVE_MINT } from '@solana/spl-token';

export const sortByRules =
  (rates: { [pair: string]: number }) => (a: TokenAccount, b: TokenAccount) => {
    if (a.mint?.equals(NATIVE_MINT) || b.mint?.equals(NATIVE_MINT)) {
      return a.mint?.equals(NATIVE_MINT) ? -1 : 1;
    }

    if (!a.balance || !b.balance) {
      return !a.balance ? 1 : -1;
    }

    const aBalance = a.balance.asNumber;
    const bBalance = b.balance.asNumber;

    const aRateSymbol = a.balance.token.symbol.toUpperCase();
    const bRateSymbol = b.balance.token.symbol.toUpperCase();

    if (rates[aRateSymbol] && rates[bRateSymbol]) {
      const aUSDBalance = aBalance * rates[aRateSymbol]!;
      const bUSDBalance = bBalance * rates[bRateSymbol]!;

      if (aUSDBalance !== bUSDBalance) {
        return aUSDBalance > bUSDBalance ? -1 : 1;
      }
    }

    if (rates[aRateSymbol] && !rates[bRateSymbol]) {
      return -1;
    }

    if (!rates[aRateSymbol] && rates[bRateSymbol]) {
      return 1;
    }

    if (aBalance !== bBalance) {
      return aBalance > bBalance ? -1 : 1;
    }

    if (a.balance.token.symbol !== b.balance.token.symbol) {
      return a.balance.token.symbol < b.balance.token.symbol ? -1 : 1;
    }

    if (!a.mint || !b.mint) {
      return !a.mint ? 1 : -1;
    }

    return a.mint?.toBase58() < b.mint?.toBase58() ? -1 : 1;
  };