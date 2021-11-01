import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const ShopCart = () => {
  useProtectedPage();
  return <div>ShopCart Page</div>;
};

export default ShopCart;
