import React, { useEffect, useState } from 'react';
import { getCurrency } from './api';
import './App.scss';
import { CurrencyConverter } from './components/CurrencyConverter/CurrencyConverter';
import { CurrencyHeader } from './components/CurrencyHeader/CurrencyHeader';

export const App: React.FC = () => {
  const [usdBuy, setUsdBuy] = useState(0);
  const [usdSale, setUsdSale] = useState(0);
  const [eurBuy, setEurBuy] = useState(0);
  const [eurSale, setEurSale] = useState(0);

  useEffect(() => {
    const currencyFromServer = async () => {
      const currentCurrency = await getCurrency();

      const USD = currentCurrency.find(currency => currency.ccy === 'USD');
      const EUR = currentCurrency.find(currency => currency.ccy === 'EUR');

      if (USD) {
        setUsdBuy(+USD.buy);
        setUsdSale(+USD.sale);
      }

      if (EUR) {
        setEurBuy(+EUR.buy);
        setEurSale(+EUR.sale);
      }
    };

    currencyFromServer();
  }, []);

  return (
    <>
      <CurrencyHeader
        usdBuy={usdBuy}
        usdSale={usdSale}
        eurBuy={eurBuy}
        eurSale={eurSale}
      />

      <CurrencyConverter
        usdBuy={usdBuy}
        usdSale={usdSale}
        eurBuy={eurBuy}
        eurSale={eurSale}
      />
    </>
  );
};
