import React, { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import { URL } from "../constants/URL";
import GlobalStateContext from "./GlobalStateContext";
import InitialLoading from "../components/InitialLoading/InitialLoadingPage";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [appLoaded, setAppLoaded] = useState(false);

  const getRestaurants = useRequestData([], `${URL}/restaurants`);

  useEffect(() => {
    setRestaurants(getRestaurants.restaurants);

    setTimeout(() => {
      setAppLoaded(true);
    }, 2000);
  }, [getRestaurants]);

  const data = { cart, setCart, restaurants };

  return (
    <GlobalStateContext.Provider value={data}>
      {appLoaded ? props.children : <InitialLoading />}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
