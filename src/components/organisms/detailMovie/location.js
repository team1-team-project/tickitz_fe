import React from "react";

export default function LocationDropdown() {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Purwokerto</option>
        <option>Jakarta</option>
        <option>Depok</option>
        <option>Banjarmasin</option>
      </select>
    </div>
  );
}
