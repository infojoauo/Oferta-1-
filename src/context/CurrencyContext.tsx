import React, { createContext, useContext, useEffect, useState } from 'react';
import { CurrencyData, DEFAULT_CURRENCY_DATA, getCurrencyData } from '../services/currencyService';

const CurrencyContext = createContext<CurrencyData>(DEFAULT_CURRENCY_DATA);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>(DEFAULT_CURRENCY_DATA);

  useEffect(() => {
    let isMounted = true;
    getCurrencyData()
      .then((data) => {
        if (isMounted) {
          setCurrencyData(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setCurrencyData(DEFAULT_CURRENCY_DATA);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <CurrencyContext.Provider value={currencyData}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyData => {
  return useContext(CurrencyContext);
};
