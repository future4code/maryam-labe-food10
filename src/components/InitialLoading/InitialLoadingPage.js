import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LoadingContainer } from "./styled";
import logoBranco from "../../assets/logoBranco.png";

const InitialLoading = () => {
  return (
    <LoadingContainer>
      <img src={logoBranco} />
      <CircularProgress style={{ color: "white" }} size={60} />
    </LoadingContainer>
  );
};

export default InitialLoading;
