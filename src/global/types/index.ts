import { categories } from "@/app/create/const";

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
