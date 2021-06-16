export interface MenuContextInterface {
  isOpen: boolean;
  menuHandler: () => void;
}

export interface CurrencyInterface {
  currency: string;
  code: string;
  mid: number;
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

export interface ModalContextInterface {
  isOpen: boolean;
  isRemoveAll: boolean;
  setIsRemoveAll: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
}
