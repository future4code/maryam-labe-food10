import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../Hooks/useProtectedPage";
import Footer from "../../Footer/Footer";
import { DivHistory, CardHistory } from "./styled";

const OrderHistory = () => {
  useProtectedPage();
  const [historyItems, setHistoryItems] = useState([]);

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
        setHistoryItems(res.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mappedItems = historyItems.map((item) => {
    const date = new Date(item.createdAt).toISOString().substring(0, 10);
    const parsedDate = date.split("-");
    return (
      <CardHistory key={item.createdAt}>
        <br/><h4>{item.restaurantName}</h4>
        <p>{`${parsedDate[2]} / ${parsedDate[1]} / ${parsedDate[0]}`}</p>
        <p>Subtotal: R${item.totalPrice}</p>
      </CardHistory>
    );
  });

  return (
    <DivHistory>
      <h2>Histórico de Pedidos</h2>
      <hr/>
      {mappedItems}
    </DivHistory>
  );
};

export default OrderHistory;
