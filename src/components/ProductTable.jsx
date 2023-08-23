import "../styles/productTable.css";
import React from "react";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div className="centered-table">
    <table className="table">
      <thead>
        <tr className="header">
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ProductTable;
