import { ChevronRight } from "lucide-react";

const categories = [
  "Woman’s Fashion",
  "Men’s Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function LeftNavMenu() {
  return (
    <aside className="w-1/4">
      <ul className="flex flex-col gap-3 text-sm font-medium text-gray-800 border-r border-gray-200">
        {categories.map((category) => (
          <li
            key={category}
            className="group flex items-center justify-between cursor-pointer px-2 py-2 rounded hover:bg-gray-100 hover:text-black transition"
          >
            <span>{category}</span>
            {(category.includes("Fashion") || category.includes("&")) && (
              <ChevronRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition"
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
