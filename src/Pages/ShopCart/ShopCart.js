import React from 'react'
import Footer from '../../Footer/Footer'
import ShopCartCard from './ShopCartCard'
import useProtectedPage from "../../hooks/useProtectedPage";

const ShopCart = () => {

    useProtectedPage()

    return (
        <div>
            ShopCart Page
            <hr/>
            <ShopCartCard/>
            <Footer/>
        </div>
    )
}

export default ShopCart;
