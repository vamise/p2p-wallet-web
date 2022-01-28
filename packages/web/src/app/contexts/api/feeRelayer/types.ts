import type { TokenAccount } from '@p2p-wallet-web/core';
import type { TokenAmount } from '@saberhq/token-utils';
import type { u64 } from '@solana/spl-token';
import type { PublicKey, Transaction } from '@solana/web3.js';

export type UserSwapTransactionSignatures = {
  user_authority_signature: string;
  transfer_authority_signature: string;
};

export type SwapArgs = {
  program_id: string;
  account_pubkey: string;
  authority_pubkey: string;
  transfer_authority_pubkey: string;
  source_pubkey: string;
  destination_pubkey: string;
  pool_token_mint_pubkey: string;
  pool_fee_account_pubkey: string;
  amount_in: number;
  minimum_amount_out: number;
};

export type SplDirectArgs = {
  Spl: SwapArgs;
};

export type SplTransitiveArgs = {
  SplTransitive: { from: SwapArgs; to: SwapArgs; transit_token_mint_pubkey: string };
};

export type TopUpSwapArgs = SplDirectArgs | SplTransitiveArgs;

export type RelayTopUpWithSwap = {
  user_source_token_account_pubkey: string;
  source_token_mint_pubkey: string;
  user_authority_pubkey: string;
  top_up_swap: TopUpSwapArgs;
  fee_amount: number;
  signatures: UserSwapTransactionSignatures;
};

export type RequestAccountMeta = {
  pubkey: number;
  is_signer: boolean;
  is_writable: boolean;
};

export type RequestInstruction = {
  program_id: number;
  accounts: RequestAccountMeta[];
  data: Array<number>;
};

export type RelaySignatures = {
  [idx: number]: string;
};

export type RelayTransaction = {
  instructions: RequestInstruction[];
  signatures: RelaySignatures;
  pubkeys: string[];
  blockhash: string;
};

export type TransactionSignatures = {
  [key: string]: string;
};

export type SignedTransaction = {
  signedTransaction: Transaction;
  signatures: TransactionSignatures;
};

export type UserRelayAccount = {
  exist: boolean;
  balance?: number;
};

export type SwapParams = {
  swapProgramId: PublicKey;
  swapAccount: PublicKey;
  swapAuthority: PublicKey;
  swapSource: PublicKey;
  swapDestination: PublicKey;
  poolTokenMint: PublicKey;
  poolFeeAccount: PublicKey;
  amountIn: u64;
  minimumAmountOut: u64;
};

export type SwapDirectParams = {
  Spl: SwapParams;
};

export type SwapTransitiveData = {
  from: SwapParams;
  to: SwapParams;
  transitTokenMintPubkey: PublicKey;
};

export type SwapTransitiveParams = {
  SplTransitive: SwapTransitiveData;
};

export type CompensationSwapParams = SwapDirectParams | SwapTransitiveParams;

export type DestinationAccount = {
  address: PublicKey;
  owner?: PublicKey;
  isNeedCreate?: boolean;
  symbol?: string;
};

export type CompensationParams = {
  feeToken: TokenAccount | null | undefined;
  feeAmount: u64;
  feeAmountInToken: u64;
  isRelayAccountExist: boolean;
  accountRentExemption: u64;
  topUpParams: CompensationSwapParams | null;
};

export type RelayTransferParams = {
  fromTokenAccount: TokenAccount;
  destinationAccount: DestinationAccount;
  amount: TokenAmount;
  compensationParams?: CompensationParams;
};
