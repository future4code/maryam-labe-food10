import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";

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
    </div>
  );
};

export default OrderHistory;
