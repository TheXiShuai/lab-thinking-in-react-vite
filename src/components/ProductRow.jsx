import React from "react";

function ProductRow({ product }) {
  const rowStyle = {
    color: product.inStock ? "black" : "red",
  };

  return (
    <tr style={rowStyle}>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
    </tr>
  );
}

export default ProductRow;
