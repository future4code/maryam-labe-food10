import React, {useEffect, useContext} from 'react'
import GlobalStateContext from '../../Global/GlobalStateContext';
import Footer from '../../Footer/Footer'
import ShopCartCard from './ShopCartCard'
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';

const ShopCart = () => {

    useProtectedPage()

    const getAddress = useRequestData([], `${BASE_URL}/profile/address`)

    const {cart, total, setTotal} = useContext(GlobalStateContext)

    useEffect(() => {
        let newTotal = 0
        cart.forEach((product) => {
            newTotal += product.price * product.amount
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
            <form>
                <label for='dinheiro'>Dinheiro</label>
                <input 
                    type='radio'
                    name='pagamento'
                    id='dinheiro'
                    value='dinheiro'
                /> <br/>

                <label for='cartão de crédito'>Cartão de crédito</label>
                <input 
                    type='radio'
                    name='pagamento'
                    id='cartão de crédito'
                    value="cartão de crédito"
                />
            </form>
            <Footer/>
        </div>
    )
}

export default ShopCart;
