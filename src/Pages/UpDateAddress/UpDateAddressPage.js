import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const UpDateAddress = () => {
  useProtectedPage();
  return <div> UpDateAddress Page</div>;
};

export default UpDateAddress;