import React, { useContext } from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext'
import styled from 'styled-components'

const ImagemCarrinho = styled.img`
width: 97px;
height: 117px;
`

const ShopCartCard = () => {

    const {cart, setCart} = useContext(GlobalStateContext)

    const removeFromCart = (productId) => {
        const newCart = cart.filter((product) => {
            if (productId !== product.id) {
                return product
            }
        })
        setCart(newCart)
    }

    const renderShopCartCard = cart && cart.map((product) => {
        return <div key={product.id}>
            <ImagemCarrinho src={product.photoUrl}/>
            <h4>{product.name}</h4>
            <button onClick={() => removeFromCart(product.id)}>Remover</button>
        </div>
    })

    return (
        <div>
            {renderShopCartCard}
        </div>
    )
}

export default ShopCartCard