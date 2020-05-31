/**
 * Used to calculate rem unit from a given value.
 */
export function rem(value: number) {
  return `${value / 16}rem`;
}

export function formatNumber(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + 'b';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;
}

export function convertUTCDateToLocalDate(date: any) {
  return new Date(
    Date.UTC(date.getHours(), date.getMinutes(), date.getSeconds())
  );
}
