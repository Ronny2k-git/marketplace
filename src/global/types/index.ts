import { categories } from "@/const";

export type Category = (typeof categories)[number];

export type Product = {
  src: string;
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  category: Category;
};
