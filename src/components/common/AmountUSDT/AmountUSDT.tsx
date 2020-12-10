import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { styled } from '@linaria/react';
import { Decimal } from 'decimal.js';

import { RootState } from 'store/rootReducer';

const Wrapper = styled.div``;

type Props = {
  value?: Decimal;
  symbol?: string;
};

export const AmountUSDT: FunctionComponent<Props> = ({
  value = new Decimal(0),
  symbol = '',
  ...props
}) => {
  const rate = useSelector((state: RootState) => state.rate[`${symbol}/USDT`]);

  if (!rate) {
    return null;
  }

  return (
    <Wrapper title="Amount in USDT" {...props}>
      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        value.times(rate).toNumber(),
      )}
    </Wrapper>
  );
};