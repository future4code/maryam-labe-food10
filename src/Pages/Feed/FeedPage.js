import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage();
  return <div>Feed Page</div>;
};

export default FeedPage;
