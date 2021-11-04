import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { goToFeed, goToProfile, goToShopCart } from "../Router/Coordinator";
import home from "../assets/home.png";
import cart from "../assets/cart.png";
import avatar from "../assets/avatar.png";
import { FooterContainer } from "./styled";

const NavBar = styled.nav`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;

const Footer = () => {
  const history = useHistory();

  return (
    <FooterContainer>
      <NavBar>
        <button onClick={() => goToFeed(history)}>
          <img src={home} />
        </button>
        <button onClick={() => goToShopCart(history)}>
          <img src={cart} />
        </button>
        <button onClick={() => goToProfile(history)}>
          <img src={avatar} />
        </button>
      </NavBar>
    </FooterContainer>
  );
};

export default Footer;
