import React, { useState } from 'react';
import './CurrencyConverter.scss';

type Props = {
  usdBuy: number,
  usdSale: number,
  eurBuy: number,
  eurSale: number,
};

export const CurrencyConverter: React.FC<Props> = ({
  usdBuy,
  usdSale,
  eurBuy,
  eurSale,
}) => {
  const UAH = 'UAH';
  const USD = 'USD';
  const EUR = 'EUR';

  const BUY = 'BUY';
  const SALE = 'SALE';

  const [query, SetQuery] = useState('');
  const [showCurrency1, setShowCurrency1] = useState(UAH);
  const [showCurrency2, setShowCurrency2] = useState(USD);
  const [buyOrSale, setBuyOrSale] = useState(BUY);

  let sum;

  if (showCurrency1 === UAH && showCurrency2 === USD && buyOrSale === BUY) {
    sum = (+query / usdBuy).toFixed(2);
  }

  if (showCurrency1 === UAH && showCurrency2 === USD && buyOrSale === SALE) {
    sum = (+query / usdSale).toFixed(2);
  }

  if (showCurrency1 === UAH && showCurrency2 === EUR && buyOrSale === BUY) {
    sum = (+query / eurBuy).toFixed(2);
  }

  if (showCurrency1 === UAH && showCurrency2 === EUR && buyOrSale === SALE) {
    sum = (+query / eurSale).toFixed(2);
  }

  if (showCurrency1 === USD && showCurrency2 === UAH && buyOrSale === BUY) {
    sum = (+query * usdBuy).toFixed(2);
  }

  if (showCurrency1 === USD && showCurrency2 === UAH && buyOrSale === SALE) {
    sum = (+query * usdSale).toFixed(2);
  }

  if (showCurrency1 === USD && showCurrency2 === EUR && buyOrSale === BUY) {
    sum = (+query * (usdBuy / eurBuy)).toFixed(2);
  }

  if (showCurrency1 === USD && showCurrency2 === EUR && buyOrSale === SALE) {
    sum = (+query * (usdSale / eurSale)).toFixed(2);
  }

  if (showCurrency1 === EUR && showCurrency2 === UAH && buyOrSale === BUY) {
    sum = (+query * eurBuy).toFixed(2);
  }

  if (showCurrency1 === EUR && showCurrency2 === UAH && buyOrSale === SALE) {
    sum = (+query * eurSale).toFixed(2);
  }

  if (showCurrency1 === EUR && showCurrency2 === USD && buyOrSale === BUY) {
    sum = (+query * (eurBuy / usdBuy)).toFixed(2);
  }

  if (showCurrency1 === EUR && showCurrency2 === USD && buyOrSale === SALE) {
    sum = (+query * (eurSale / usdSale)).toFixed(2);
  }

  return (
    <>
      <div className="converter">
        <select
          className="converter__select"
          value={buyOrSale}
          onChange={(event) => setBuyOrSale(event.target.value)}
        >
          <option value={BUY}>Buy</option>
          <option value={SALE}>Sale</option>
        </select>
        <input
          className="converter__input"
          type="number"
          value={query}
          onChange={(event) => {
            SetQuery(event.target.value);
          }}
        />
        <select
          className="converter__select"
          value={showCurrency1}
          onChange={(event) => setShowCurrency1(event.target.value)}
        >
          <option
            value={UAH}
            disabled={showCurrency2 === UAH}
          >
            UAH
          </option>
          <option
            value={USD}
            disabled={showCurrency2 === USD}
          >
            USD
          </option>
          <option
            value={EUR}
            disabled={showCurrency2 === EUR}
          >
            EUR
          </option>
        </select>
        <button
          className="converter__button"
          type="button"
          onClick={() => {
            setShowCurrency1(showCurrency2);
            setShowCurrency2(showCurrency1);
          }}
        >
          &#8646;
        </button>
        <select
          className="converter__select"
          value={showCurrency2}
          onChange={(event) => setShowCurrency2(event.target.value)}
        >
          <option
            value={UAH}
            disabled={showCurrency1 === UAH}
          >
            UAH
          </option>
          <option
            value={USD}
            disabled={showCurrency1 === USD}
          >
            USD
          </option>
          <option
            value={EUR}
            disabled={showCurrency1 === EUR}
          >
            EUR
          </option>
        </select>
      </div>
      <div className="converter__sum">
        <p>{sum}</p>
      </div>
    </>
  );
};
