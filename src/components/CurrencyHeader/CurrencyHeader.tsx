import React from 'react';
import './CurrencyHeader.scss';

type Props = {
  usdBuy: number,
  usdSale: number,
  eurBuy: number,
  eurSale: number,
};

export const CurrencyHeader: React.FC<Props> = ({
  usdBuy,
  usdSale,
  eurBuy,
  eurSale,
}) => (
  <div className="header">
    <p>{`USD BUY: ${usdBuy.toFixed(4)}`}</p>
    <p>{`USD SALE: ${usdSale.toFixed(4)}`}</p>
    <p>{`EUR BUY: ${eurBuy.toFixed(4)}`}</p>
    <p>{`EUR SALE: ${eurSale.toFixed(4)}`}</p>
  </div>
);
