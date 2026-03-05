export function CalculatePct(original: number, current: number) {
  const discount = original - current;
  const percentage = (discount / original) * 100;

  return `${Math.round(percentage)}%`;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US");
}
