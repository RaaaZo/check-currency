export interface MenuContextInterface {
  isOpen: boolean;
  menuHandler: () => void;
}

export interface CurrencyInterface {
  currency: string;
  code: string;
  bid: number;
  ask: number;
}

export interface GetCurrenciesInterface {
  table: string;
  no: string;
  effectiveDate: string;
  rates: CurrencyInterface[];
}
