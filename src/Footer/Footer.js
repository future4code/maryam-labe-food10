import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToFeed, goToProfile, goToShopCart } from '../Router/Coordinator'

const NavBar = styled.nav`
width: 100vw;
position: fixed;
bottom: 0;
display: flex;
justify-content: space-evenly;
`

const Footer = () => {

    const history = useHistory()

    return (
        <div>
            <NavBar>
                <button onClick={() => goToFeed(history)}>Home</button>
                <button onClick={() => goToShopCart(history)}>Cart</button>
                <button onClick={() => goToProfile(history)}>Profile</button>
            </NavBar>
        </div>
    )
}

export default Footer