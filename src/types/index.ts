export interface MenuContextInterface {
  isOpen: boolean;
  menuHandler: () => void;
}

export interface CurrencyInterface {
  currency: string;
  code: string;
  bid?: number;
  ask?: number;
  mid?: number;
}

export interface GetCurrenciesInterface {
  table: string;
  no: string;
  effectiveDate: string;
  rates: CurrencyInterface[];
}

export interface GetCurrencyByCode {
  code: string;
  currency: string;
  table: string;
  rates: {
    effectiveDate: string;
    mid: number;
    no: string;
  }[];
}
