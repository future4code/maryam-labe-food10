import React, {useContext} from 'react'
import useRequestData from '../../hooks/useRequestData'
import {URL} from '../../constants/URL'
import GlobalStateContext from '../../Global/GlobalStateContext'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'

const RestaurantProducts = (props) => {

    const {cart, setCart} = useContext(GlobalStateContext)

    const addToCart = (detail) => {
        let newCart = [...cart, detail]
        setCart(newCart)
    }

    const restaurantDetails = useRequestData([], `${URL}/restaurants/${props.restaurantId}`)

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
                <button onClick={() => addToCart(detail)}>Adicionar</button>
                </CardContent>
            </Card>
        
        
        {/* <div key={detail.id}>
            <img src={detail.photoUrl} alt="Foto do produto"/>
            <h4>{detail.name}</h4>
            <h5>{detail.category}</h5>
            <p>{detail.description}</p>
            <p>R$ {detail.price}</p>
            <button onClick={() => addToCart(detail)}>Adicionar</button>
        </div> */}
    })

    return (
        <div>
            {renderRestaurantDetail}
        </div>
    )
}

export default RestaurantProducts