function formatCurrency(value: number, langCode: string, currCode: string) {
	const formatter = Intl.NumberFormat(langCode, {
    style: 'currency',
    currency: currCode,
  });
  return formatter.format(value / 100);
};

export default formatCurrency;