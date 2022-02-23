import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddtoCart] = useState(false);
  function addToCartHandler() {
    setAddtoCart(!addToCart);
  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={addToCart ? "remove" : "add"}
        onClick={addToCartHandler}
      >
        {addToCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
