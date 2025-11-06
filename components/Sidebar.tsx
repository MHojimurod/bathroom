import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINT } from "@/constants";
import { useLanguage } from "../context/LanguageContext";

interface Category {
  name: string;
  unique_key: string;
  subcategories?: Category[];
}

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (key: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());
  const { t } = useLanguage();
  

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "uz";

    axios.get(`${ENDPOINT}/api/v1/categories`, {
        headers: {
          "Accept-Language": lang, // send language header
        },
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const toggleCategory = (key: string) => {
    const newSet = new Set(openCategories);
    if (newSet.has(key)) newSet.delete(key);
    else newSet.add(key);
    setOpenCategories(newSet);
  };

  const renderCategories = (cats: Category[], level = 0) => {
    return cats.map((cat) => (
      <li key={cat.unique_key}>
        <button
          onClick={() => {
            onCategoryChange(cat.unique_key);
            if (cat.subcategories?.length) toggleCategory(cat.unique_key);
          }}
          className={`w-full text-left px-${4 + level * 2} py-2 rounded-md transition-colors duration-200 flex justify-between items-center ${selectedCategory === cat.unique_key
              ? "bg-gray-800 text-white font-semibold"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          {cat.name}
          {cat.subcategories?.length ? (
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${openCategories.has(cat.unique_key) ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : null}
        </button>

        {cat.subcategories &&
          cat.subcategories.length > 0 &&
          openCategories.has(cat.unique_key) && (
            <ul className="pt-2 space-y-1">{renderCategories(cat.subcategories, level + 1)}</ul>
          )}
      </li>
    ));
  };

  return (
    <aside className="lg:w-1/4">
      <h2 className="text-xl font-bold text-gray-800 mb-6">{t.product.productCategories}</h2>
      <ul className="space-y-1">
        <li>
          <button
            onClick={() => onCategoryChange("all")}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${selectedCategory === "all"
                ? "bg-gray-800 text-white font-semibold"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {t.product.allProducts}
          </button>
        </li>
        {renderCategories(categories)}
      </ul>
    </aside>
  );
};

export default Sidebar;
