import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Div, CardContainer, ProductDescription, RemoveButton } from "./styled";
const ImagemCarrinho = styled.img`
  width: 97px;
  height: 117px;
`;
const ShopCartCard = () => {
  const { cart, setCart } = useContext(GlobalStateContext);
  const removeFromCart = (product) => {
    const position = cart.findIndex((item) => {
      return item.id === product.id;
    });

    let newCart = [...cart];

    if (newCart[position].quantity === 1) {
      newCart.splice(position, 1);
    } else {
      newCart[position].quantity -= 1;
    }
    setCart(newCart);
  };
  const renderShopCartCard =
    cart &&
    cart.map((product) => {
      return (
        <Card sx={{ maxWidth: 345 }} key={product.id}>
          <CardContainer>
            <CardMedia
              component="img"
              height="140"
              image={product.photoUrl}
              alt="Foto produto"
            />
            <CardContent>
              <Div>
                <ProductDescription>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.quantity}x
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                    <RemoveButton>
                      <button onClick={() => removeFromCart(product)}>
                        Remover
                      </button>
                    </RemoveButton>
                  </Typography>
                </ProductDescription>
              </Div>
            </CardContent>
          </CardContainer>
        </Card>
      );
    });
  return <div>{renderShopCartCard}</div>;
};
export default ShopCartCard;
