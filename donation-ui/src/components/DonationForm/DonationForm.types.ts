import { Dictionary } from "lodash";

export type Currency = {
  name: string;
  code: string;
  symbol: string;
  rate: number;
};

export type CurrencyWithPreset = Currency & { preset: number[] };
