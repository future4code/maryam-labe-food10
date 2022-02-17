import React, { useContext, useEffect } from 'react'
import useForm from '../../Hooks/useForm'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { acceptBuy } from '../../requisitions/posts/posts'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { SettingsApplicationsRounded } from '@material-ui/icons'

const DivButton = styled.div`
display: flex;
width: 70vw;
justify-content: center;
align-items: center;

`
const DivEsterna = styled.div`
display: flex;
width: 100vw;
justify-content: center;
align-items: center;
`

const ShopCardForm = () => {

    const {setCart} = useContext(GlobalStateContext)
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
        setCart([])
    }

    return (
        <div>
            <form onSubmit={buy}>
                {/* <label for='dinheiro'><span>Dinheiro</span></label> */}
                <input
                    type='radio'
                    name='paymentMethod'
                    id='dinheiro'
                    value='money'
                    onClick={onChange}
                />
                <label for='dinheiro'><span>Dinheiro</span></label> <br/>

                {/* <label for='cartão de crédito'><span>Cartão de crédito</span></label> */}
                <input
                    type='radio'
                    name='paymentMethod'
                    id='cartão de crédito'
                    value='creditcard'
                    onClick={onChange}
                />
                 <label for='cartão de crédito'><span>Cartão de crédito</span></label> <br/>
                 <br/>
                 <DivEsterna>
                <DivButton>
                <Button
                type='submit'
                fullWidth
                variant={"contained"}
                color={"primary"}
                margin={"normal"}>Confirmar</Button>
                </DivButton>
                </DivEsterna>
            </form>
        </div>
    )
}

export default ShopCardForm
