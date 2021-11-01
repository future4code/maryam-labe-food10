import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const Restaurants = () => {
  useProtectedPage();
  return <div>Restaurant Page</div>;
};

export default Restaurants;
