import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Category } from "../types";

export const SELECTOR_CATEGORY_VALUES = [
  { value: "", label: "Select a category", class: "hidden" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home & Kitchen" },
  { value: "books", label: "Books" },
  { value: "sports", label: "Sports" },
  { value: "beauty", label: "Beauty" },
  { value: "toys", label: "Toys" },
  { value: "movies", label: "Movies" },
  { value: "automotive", label: "Automotive" },
  { value: "food", label: "Food" },
  { value: "health", label: "Health" },
  { value: "pet", label: "Pet" },
  { value: "office", label: "Office" },
  { value: "gaming", label: "Gaming" },
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

export const formattedCategory: Record<Category, string> = {
  electronics: "Electronics",
  clothing: "Clothing",
  home: "Home & Kitchen",
  books: "Books",
  sports: "Sports",
  beauty: "Beauty",
  toys: "Toys",
  movies: "Movies",
  automotive: "Automotive",
  food: "Food",
  health: "Health",
  pet: "Pet",
  office: "Office",
  gaming: "Gaming",
};
