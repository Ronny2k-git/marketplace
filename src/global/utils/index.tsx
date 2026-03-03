import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

export const SELECTOR_VALUES = [
  { value: "", label: "Select one", class: "hidden" },
  { value: "peripherals", label: "Peripherals" },
  { value: "acessories", label: "Acessories" },
  { value: "portables", label: "Portables" },
  { value: "complete-PC", label: "Complete PC" },
  { value: "computer-parts", label: "Computer Parts" },
];

export const PROJECT_ROUTES = [
  {
    label: "Dashboard",
    path: "/",
    icon: <MdDashboard className="size-7" />,
  },
  {
    label: "Products",
    path: "/products",
    icon: <AiOutlineAppstore className="size-7" />,
  },
  {
    label: "Create",
    path: "/create",
    icon: <IoMdAddCircleOutline className="size-7" />,
  },
];

export function CalculatePct(original: number, current: number) {
  const discount = original - current;
  const percentage = (discount / original) * 100;

  return `${Math.round(percentage)}%`;
}
