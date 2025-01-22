import React from "react";

const SortSelect = ({ onChange }) => {
  return (
    <select
      className="border border-gray-300 p-2 rounded w-full md:w-1/5"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="best-selling">Best Selling</option>
      <option value="low-to-high">Price: Low to High</option>
      <option value="high-to-low">Price: High to Low</option>
    </select>
  );
};

export default SortSelect;
