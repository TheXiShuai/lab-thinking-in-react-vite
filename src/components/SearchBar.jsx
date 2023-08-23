import React from "react";

function SearchBar({ onSearch, onStockChange, filterInStock }) {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  const handleStockChange = (event) => {
    const inStock = event.target.checked;
    onStockChange(inStock);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
      <br />
      <input
        type="checkbox"
        checked={filterInStock}
        onChange={handleStockChange}
      />{" "}
      Only show products in stock
    </div>
  );
}

export default SearchBar;
