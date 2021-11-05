import React, { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import styled from 'styled-components'

const ImagemCarrinho = styled.img`
width: 97px;
height: 117px;
`

const ShopCartCard = () => {

    const {cart, setCart} = useContext(GlobalStateContext)

    const removeFromCart = (product) => {
        const position = cart.findIndex((item) => {
            return item.id === product.id
        })

        let newCart = [...cart]

        if (newCart[position].quantity === 1) {
            newCart.splice(position, 1)
        } else {
            newCart[position].quantity -= 1
        }
        setCart(newCart)
    }

    const renderShopCartCard = cart && cart.map((product) => {
        return <div key={product.id}>
            <ImagemCarrinho src={product.photoUrl}/>
            <h4>{product.name}</h4>
            <p>{product.quantity} X</p>
            <button onClick={() => removeFromCart(product)}>Remover</button>
        </div>
    })

    return (
        <div>
            {renderShopCartCard}
        </div>
    )
}

export default ShopCartCard