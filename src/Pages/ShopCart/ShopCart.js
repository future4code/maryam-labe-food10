import React, {useEffect, useContext} from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext';
import Footer from '../../Footer/Footer'
import ShopCartCard from './ShopCartCard'
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import ShopCardForm from './ShopCardForm';

const ShopCart = () => {

    useProtectedPage()

    const getAddress = useRequestData([], `${BASE_URL}/profile/address`)

    const {confirmBuy, setConfirmBuy} = useContext(GlobalStateContext)
    const {buyObject, setBuyObject} = useContext(GlobalStateContext)
    const {cart, total, setTotal} = useContext(GlobalStateContext)

    const confirmObject = cart && cart.map((product) => {
        return {
            id: product.id,
            quantity: product.quantity
        }
    })

    useEffect(() => {
        const newConfirmBuy = {...confirmBuy, products: buyObject}
        buyObject && setConfirmBuy(newConfirmBuy)
    }, [buyObject])

    useEffect(() => {
        confirmObject && setBuyObject(confirmObject)
    }, [cart])

    useEffect(() => {
        let newTotal = 0
        cart.forEach((product) => {
            newTotal += product.price * product.quantity
            setTotal(newTotal)
        })
    }, [cart])

    const renderAdress = getAddress && getAddress.address && <div>{`${getAddress.address.street}, ${getAddress.address.number}`}</div>

    return (
        <div>
            ShopCart Page
            {renderAdress}
            <hr/>
            <div>
                {cart && cart.length !== 0 ? <h3>R$ {total.toFixed(2)}</h3> : <h4>Carrinho vazio</h4>}
            </div>
            <ShopCartCard/>
            <p>Forma de pagamento</p>
            <hr/>
            <ShopCardForm/>
            <Footer/>
        </div>
    )
}
export default ShopCart;
