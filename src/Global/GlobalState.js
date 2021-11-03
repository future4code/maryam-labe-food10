import React, {useState, useEffect} from 'react'
import useRequestData from '../Hooks/useRequestData'
import { URL } from '../Constants/URL'
import GlobalStateContext from './GlobalStateContext'


const GlobalState = (props) => {

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = useRequestData([], `${URL}/restaurants`)
    // console.log("Teste", restaurants)
    
    useEffect(() => {
        setRestaurants(getRestaurants.restaurants)
    }, [getRestaurants])

    const data = {cart, setCart, restaurants}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState