import { ButtonBase } from "@material-ui/core";
import { Home, LocalGasStation, ShoppingCart } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { goToFeed, goToProfile, goToShopCart } from "../Router/Coordinator";
import homeLaranja from "../assets/homeLaranja.png";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import cartLaranja from "../assets/cartLaranja.png";
import avatar from "../assets/avatar.png";
import avatarLaranja from "../assets/avatarLaranja.png";
import axios from "axios";
import Header from "../Header/Header";
import clock from "../assets/clock.png";

const NavBar = styled.nav`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  background-color: white;
  border-top: 1px solid gray;
`;
const OrderAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  width: 100vw;
  position: fixed;
  bottom: 7vh;
  background-color: #e86e5a;

  img {
    width: 56px;
    height: 56px;
  }
`;
const NavContainer = styled.div`
  margin-top: 12px;
  width: 100vw;
  height: 5vh;
`;
const PColorWhite = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const Footer = (props) => {
  const [order, setOrder] = useState();
  const params = useParams();

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrder(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NavContainer>
      {!order ? null : (
        <OrderAlert>
          <img src={clock} />
          <div>
            <PColorWhite>Pedido em Andamento</PColorWhite>
            <p>{order && order.restaurantName}</p>
            <p>
              <b>SUBTOTAL R${order && order.totalPrice}</b>
            </p>
          </div>
        </OrderAlert>
      )}
      {/* <div>
                  <p>{activeOrder && activeOrder.order.totalPrice}</p> 
                <p>{activeOrder && activeOrder.order.restaurantName}</p>  
            </div> */}
      {/* {henderActive && henderActive} */}
      <NavBar>
        <ButtonBase onClick={() => goToFeed(history)}>
          {props.feed ? <img src={homeLaranja} /> : <img src={home} />}{" "}
        </ButtonBase>
        <ButtonBase onClick={() => goToShopCart(history)}>
          {props.ShopCart ? <img src={cartLaranja} /> : <img src={cart} />}
        </ButtonBase>
        <ButtonBase onClick={() => goToProfile(history)}>
          {props.profile ? <img src={avatarLaranja} /> : <img src={avatar} />}
        </ButtonBase>
      </NavBar>
    </NavContainer>
  );
};

export default Footer;
