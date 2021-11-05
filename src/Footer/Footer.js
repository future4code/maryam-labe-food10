import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BASE_URL } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'
import { goToFeed, goToProfile, goToShopCart } from '../Router/Coordinator'

const NavBar = styled.nav`
width: 100vw;
position: fixed;
bottom: 0;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 5vh;
background-color: gray;
`

const NavContainer = styled.div`
margin-top: 12px;
width: 100vw;
height: 5vh;
`

const Footer = () => {

    const history = useHistory()

    const activeOrder = useRequestData({}, `${BASE_URL}/active-order`)
    // console.log("AQUI", activeOrder.order.totalPrice)

    return (
        <NavContainer>
            <div>
                {/* <p>{activeOrder && activeOrder.order.totalPrice}</p> */}
                {/* <p>{activeOrder && activeOrder.order.restaurantName}</p> */}
            </div>
            <NavBar>
                <button onClick={() => goToFeed(history)}>Home</button>
                <button onClick={() => goToShopCart(history)}>Cart</button>
                <button onClick={() => goToProfile(history)}>Profile</button>
            </NavBar>
        </NavContainer>
    )
}

export default Footer