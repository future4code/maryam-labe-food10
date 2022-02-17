import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Footer from "../../Footer/Footer";
import ShopCartCard from "./ShopCartCard";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import ShopCardForm from "./ShopCardForm";
import Header from "../../Header/Header";
import { useHistory } from "react-router";
import { DivWhite } from "./styled";
import { Restaurant } from "@material-ui/icons";

const ShopCart = () => {
  useProtectedPage();
  const history = useHistory();

  const getAddress = useRequestData([], `${BASE_URL}/profile/address`);

  const { confirmBuy, setConfirmBuy } = useContext(GlobalStateContext);
  const { buyObject, setBuyObject } = useContext(GlobalStateContext);
  const { cart, total, setTotal } = useContext(GlobalStateContext);

  const confirmObject =
    cart &&
    cart.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
      };
    });

  useEffect(() => {
    const newConfirmBuy = { ...confirmBuy, products: buyObject };
    buyObject && setConfirmBuy(newConfirmBuy);
  }, [buyObject]);

  useEffect(() => {
    confirmObject && setBuyObject(confirmObject);
  }, [cart]);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((product) => {
      newTotal += product.price * product.quantity;
      setTotal(newTotal);
    });
  }, [cart]);

  const renderAdress = getAddress && getAddress.address && (
    <div>{`${getAddress.address.street}, ${getAddress.address.number}`}</div>
  );

  return (
    <div>
      <Header history={history} title={"Meu Carrinho"} logout={history} />
      <p>{renderAdress}</p>
      <hr />
      <div>
        {cart && cart.length !== 0 ? (
          <h3>Subtotal: R$ {total.toFixed(2)}</h3>
        ) : (
          <h4>Carrinho vazio</h4>
        )}
      </div>
      <ShopCartCard />
      <p>Forma de pagamento</p>
      <hr />
      <ShopCardForm />
      <DivWhite></DivWhite>
      <Footer ShopCart={true} />
    </div>
  );
};
export default ShopCart;
