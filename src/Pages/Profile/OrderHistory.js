import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import Header from "../../Header/Header";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToProfile } from "../../Router/Coordinator";
import edit from "../../assets/edit.png";
import { ProfileAddress, ProfileData, ProfileContainer } from "./styled";

const OrderHistory = () => {
  useProtectedPage();

  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    getOrderHistory();
  }, []);

  const getOrderHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Histórico de Pedidos</h2>

      {/* <Footer /> */}
    </div>
  );
};

export default OrderHistory;
