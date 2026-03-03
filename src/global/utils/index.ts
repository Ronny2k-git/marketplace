export const SELECTOR_VALUES = [
  { value: "", label: "Select one", class: "hidden" },
  { value: "peripherals", label: "Peripherals" },
  { value: "acessories", label: "Acessories" },
  { value: "portables", label: "Portables" },
  { value: "complete-PC", label: "Complete PC" },
  { value: "computer-parts", label: "Computer Parts" },
];

export function CalculatePct(original: number, current: number) {
  const discount = original - current;
  const percentage = (discount / original) * 100;

  return `${Math.round(percentage)}%`;
}
