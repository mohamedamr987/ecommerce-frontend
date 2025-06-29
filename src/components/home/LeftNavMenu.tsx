"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
export const categories = [
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile: Toggle Button */}
      <div className="flex items-center justify-between lg:hidden px-4 py-2 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-black" size={20} />
          ) : (
            <Menu className="text-black" size={20} />
          )}
        </button>
      </div>

      {/* Mobile: Dropdown */}
      {isOpen && (
        <ul className="lg:hidden px-4 py-2 border-b flex flex-col gap-3 text-sm font-medium text-gray-800">
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center justify-between cursor-pointer px-2 py-2 rounded hover:bg-gray-100 hover:text-black transition"
            >
              <span>{category}</span>
              {(category.includes("Fashion") || category.includes("&")) && (
                <ChevronRight size={16} />
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Desktop: Sidebar */}
      <aside className="w-full lg:w-[220px] xl:w-[250px] hidden lg:block">
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
    </>
  );
}
