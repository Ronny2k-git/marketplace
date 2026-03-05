import { Input } from "@/ui/components";
import { SELECTOR_CATEGORY_VALUES } from "../constants";

type ProductFormData = {
  imageURL: string;
  productName: string;
  category: string;
  description: string;
};

type ProductFormProps = {
  form: ProductFormData;
  setForm: React.Dispatch<React.SetStateAction<ProductFormData>>;
};

export function ProductForm({ form, setForm }: ProductFormProps) {
  return (
    <div className="flex flex-col max-sm:gap-6 gap-8">
      {/* Image URL*/}
      <Input
        label="Image URL"
        size={"md"}
        placeholder="https://example.com/image.jpg"
        value={form.imageURL}
        onChange={(e) => setForm({ ...form, imageURL: e.target.value })}
      />

      {/* Product Name */}
      <Input
        label="Product Name"
        size={"md"}
        placeholder="Enter product name"
        value={form.productName}
        onChange={(e) => setForm({ ...form, productName: e.target.value })}
        maxLength={25}
      />

      {/* Category */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Category</label>
        <select
          className="h-11 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          {SELECTOR_CATEGORY_VALUES.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Product Description</label>
        <textarea
          className="min-h-[120px] p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-600 outline-none transition resize-none"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Describe the product..."
        />
      </div>
    </div>
  );
}
