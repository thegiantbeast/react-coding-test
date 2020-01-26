export const formatNumber = (num) => {
  return Intl.NumberFormat().format(num || 0);
}