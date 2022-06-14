const URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export async function getCurrency(): Promise<CurrencyRate[]> {
  const response = await fetch(URL);

  return response.json();
}
