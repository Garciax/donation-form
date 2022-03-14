const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export const convertAmount = (rate: number, value: number) => {
  const newValue = rate * value;
  if (newValue <= 100) {
    return Math.round(newValue / 10) * 10;
  }
  if (newValue > 100 && newValue <= 1000) {
    return Math.round(newValue / 100) * 100;
  }
  if (newValue > 1000 && newValue <= 10_000) {
    return Math.round(newValue / 1000) * 1000;
  }
  return Math.round(newValue / 10_000) * 10_000;
};

export const formatAmount = (value: number, currency: string) => {
  return `${currency}${formatter.format(value)}`;
};
