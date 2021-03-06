import React, { useContext } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'
import styled from 'styled-components'

const AddButton = styled.button`
margin-right: 12px;
`

const RestaurantProducts = (props) => {

    const { setRestaurantId } = useContext(GlobalStateContext)
    const { cart, setCart } = useContext(GlobalStateContext)

    const addToCart = (detail) => {
        const position = cart.findIndex((item) => {
            return detail.id === item.id
        })

        let newCart = [...cart]

        if (position === -1) {
            newCart.push({ ...detail, quantity: 1 })
        } else {
            newCart[position].quantity += 1
        }
        setCart(newCart)
        setRestaurantId(props.restaurantId)
    }

    const restaurantDetails = useRequestData([], `${BASE_URL}/restaurants/${props.restaurantId}`)

    const renderRestaurantDetail = restaurantDetails && restaurantDetails.restaurant &&
        restaurantDetails.restaurant.products && restaurantDetails.restaurant.products.map((detail) => {
            return <Card sx={{ maxWidth: 345 }}
                key={detail.id}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={detail.photoUrl}
                    alt="Logo do restauranta"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {detail.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {detail.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {detail.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        R$ {detail.price}
                    </Typography>
                    <AddButton id='botton-add' onClick={() => addToCart(detail)}>Adicionar</AddButton>
                    {cart && cart.map((product) => {
                        if (product.id === detail.id) {
                            return <span>{product.quantity}X</span>
                        }
                    })}
                </CardContent>
            </Card>

        })

    return (
        <div>
            {renderRestaurantDetail}
        </div>
    )
}
export default RestaurantProducts