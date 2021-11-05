import React, {useState, useEffect} from 'react'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/urls'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const getRestaurants = useRequestData([], `${BASE_URL}/restaurants`)

    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [total, setTotal] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const [isAmount, setIsAmount] = useState(false)
    const [buyObject, setBuyObject] = useState()
    const [restaurantId, setRestaurantId] = useState()
    const [confirmBuy, setConfirmBuy] = useState({
        products: [],
        paymentMethod: ''
    })
    
    useEffect(() => {
        setRestaurants(getRestaurants.restaurants)
    }, [getRestaurants])

    const data = {restaurantId, setRestaurantId, 
        confirmBuy, setConfirmBuy, 
        buyObject, setBuyObject, 
        isAmount, setIsAmount, 
        cart, setCart, 
        restaurants, 
        total, setTotal, 
        isClicked, setIsClicked}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState