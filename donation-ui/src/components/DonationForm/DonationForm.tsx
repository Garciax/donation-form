import cn from "./DontaionForm.module.scss";
import Button, { ButtonType } from "../Button/Button";
import Input from "../Input/Input";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { convertAmount, formatAmount } from "./helpers";
import _ from "lodash";
import { CurrencyWithPreset } from "./DonationForm.types";
import client from "../../api/RestClient";

const currencies = [
  { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
  { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
  { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
  { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 },
];
const presets = [40, 100, 200, 1000, 2500, 5000];
const suggestion = 40;
const initialCurrency = "USD";
const currenciesWithPreset: CurrencyWithPreset[] = currencies.map(
  (currency) => {
    const currencyPreset = presets.map((value) =>
      convertAmount(currency.rate, value)
    );
    return { ...currency, preset: currencyPreset };
  }
);
const currenciesDictionary = _.keyBy(
  currenciesWithPreset,
  (cur: CurrencyWithPreset) => cur.code
);

/**
 * Форма пожертвования
 */
const DonationForm = () => {
  const [amount, setAmount] = useState<number>(suggestion);
  const [currency, setCurrency] = useState<string>(initialCurrency);
  const [previousCurrency, setPreviousCurrency] =
    useState<string>(initialCurrency);
  const currencyInfo = useMemo(
    () => currenciesDictionary[currency],
    [currency]
  );

  useEffect(() => {
    const prevCurrencyInfo = currenciesDictionary[previousCurrency];
    if (prevCurrencyInfo.preset.includes(amount)) {
      const index = prevCurrencyInfo.preset.indexOf(amount);
      setAmount(currencyInfo.preset[index]);
    } else {
      const newValue = Math.round(
        (amount / prevCurrencyInfo.rate) * currencyInfo.rate
      );
      setAmount(newValue);
    }
    setPreviousCurrency(currency);
  }, [currency]);

  const sendRequest = useCallback(async () => {
    await client.sendRequest({ amount, currency });
  }, [amount, currency]);

  const onAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      value ? setAmount(value) : setAmount(0);
    },
    []
  );

  const renderPresetButton = useCallback(
    (value: number) => {
      const formattedValue = formatAmount(value, currencyInfo.symbol);
      return (
        <Button
          isActive={amount === value}
          type={ButtonType.AMOUNT}
          onClick={() => {
            setAmount(value);
          }}
          key={`key-${value}`}
        >
          {formattedValue}
        </Button>
      );
    },
    [amount, currencyInfo.symbol]
  );

  return (
    <div className={cn.container}>
      <div className={cn.buttons_container}>
        {currencyInfo.preset.map(renderPresetButton)}
      </div>
      <div className={cn.input_container}>
        <Input
          value={amount}
          onChange={onAmountChange}
          leftComponent={currencyInfo.symbol}
          rightComponent={
            <Dropdown
              selected={currency}
              options={Object.keys(currenciesDictionary)}
              onChange={setCurrency}
            />
          }
        />
      </div>
      <div className={cn.donate_button_container}>
        <Button onClick={sendRequest} type={ButtonType.DONATE}>
          DONATE
        </Button>
      </div>
    </div>
  );
};

export default DonationForm;
