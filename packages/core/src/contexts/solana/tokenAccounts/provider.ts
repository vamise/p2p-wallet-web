import { useEffect, useState } from 'react';

import { useSail } from '@p2p-wallet-web/sail';
import type { PublicKey } from '@solana/web3.js';
import { createContainer } from 'unstated-next';

import { useConnectedWallet, useConnectionContext } from '../solana';
import { precacheUserTokenAccounts } from './utils/precacheUserTokenAccounts';

export interface UseTokenAccounts {
  userTokenAccountKeys: PublicKey[];
}

const useTokenAccountsInternal = (): UseTokenAccounts => {
  const { connection } = useConnectionContext();
  const { loader, accountsCache } = useSail();
  const wallet = useConnectedWallet();
  const publicKey = wallet?.publicKey;

  const [userTokenAccountKeys, setUserTokenAccountKeys] = useState<PublicKey[]>(
    publicKey ? [publicKey] : [],
  );

  useEffect(() => {
    if (!connection || !publicKey) {
      setUserTokenAccountKeys([]);
      return;
    }

    // First query of useAccountsData or useParsedAccountsData set data which will update only after new fetch
    // so we need to give userTokenAccountKeys to useUserTokenAccounts already with publicKey of user to instant show
    // this key in list
    setUserTokenAccountKeys((keys) => [...new Set([publicKey, ...keys])]);

    const controller = new AbortController();
    void precacheUserTokenAccounts(connection, loader, accountsCache, publicKey).then(
      ({ keys, ownerPublicKey }) => {
        // if user wallet publicKey already changed - ignore
        if (!ownerPublicKey.equals(publicKey)) {
          return;
        }

        if (keys) {
          setUserTokenAccountKeys((prevKeys) => [...new Set([publicKey, ...prevKeys, ...keys])]);
        }
      },
    );

    return () => {
      controller.abort();
    };
  }, [accountsCache, connection, loader, publicKey, setUserTokenAccountKeys]);

  return {
    userTokenAccountKeys,
  };
};

export const { Provider: TokenAccountsProvider, useContainer: useTokenAccounts } =
  createContainer(useTokenAccountsInternal);
