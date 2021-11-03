import React from "react";
import errorPage from "../../assets/errorPage.png";
import { ErroContainer } from "./styled";

const ErrorPage = () => {
  return (
    <ErroContainer>
      <img src={errorPage} />
    </ErroContainer>
  );
};

export default ErrorPage;
