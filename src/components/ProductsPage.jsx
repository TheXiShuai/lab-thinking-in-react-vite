import React, { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInStock, setFilterInStock] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterInStock || product.inStock)
  );

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleStockChange = (inStock) => {
    setFilterInStock(inStock);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar classname='search'
        onSearch={handleSearch}
        onStockChange={handleStockChange}
        filterInStock={filterInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
