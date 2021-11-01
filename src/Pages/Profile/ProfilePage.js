import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {
  useProtectedPage();
  return <div>Profile Page</div>;
};

export default ProfilePage;
