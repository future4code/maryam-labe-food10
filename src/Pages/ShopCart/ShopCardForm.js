import React, { useContext, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { acceptBuy } from '../../requisitions/posts/posts'

const ShopCardForm = () => {

    const {restaurantId} = useContext(GlobalStateContext)
    const {confirmBuy, setConfirmBuy} = useContext(GlobalStateContext)
    
    const [form, onChange] = useForm({
        paymentMethod: ""
    })

    useEffect(() => {
        const newConfirmBuy = {...confirmBuy, paymentMethod: form.paymentMethod}
        setConfirmBuy(newConfirmBuy)
    }, [form])

    const buy = (e) => {
        e.preventDefault()
        acceptBuy(restaurantId, confirmBuy)
    }

    return (
        <div>
            <form onSubmit={buy}>
                <label for='dinheiro'>Dinheiro</label>
                <input 
                    type='radio'
                    name='paymentMethod'
                    id='dinheiro'
                    value='money'
                    onClick={onChange}
                /> <br/>

                <label for='cartão de crédito'>Cartão de crédito</label>
                <input 
                    type='radio'
                    name='paymentMethod'
                    id='cartão de crédito'
                    value='creditcard'
                    onClick={onChange}
                />

                <button type='submit'>Confirmar</button>
            </form>
        </div>
    )
}

export default ShopCardForm