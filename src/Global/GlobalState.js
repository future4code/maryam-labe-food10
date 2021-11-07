import React, { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";
import InitialLoading from "../components/InitialLoading/InitialLoadingPage";
import axios from "axios";
const GlobalState = (props) => {
 

  const [cart, setCart] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [appLoaded, setAppLoaded] = useState(false);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isAmount, setIsAmount] = useState(false);
  const [buyObject, setBuyObject] = useState();
  const [restaurantId, setRestaurantId] = useState();
  const [confirmBuy, setConfirmBuy] = useState({
    products: [],
    paymentMethod: "",
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res)=>{
      setRestaurants(res.data.restaurants)
    }).catch((err)=>{
      console.log(err)
    })

    setTimeout(() => {
      setAppLoaded(true);
    }, 2000);
  }, []);
  const data = {
    restaurantId,
    setRestaurantId,
    confirmBuy,
    setConfirmBuy,
    buyObject,
    setBuyObject,
    isAmount,
    setIsAmount,
    cart,
    setCart,
    restaurants,
    total,
    setTotal,
    isClicked,
    setIsClicked,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {appLoaded ? props.children : <InitialLoading />}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
