import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import RestaurantProducts from './RestaurantProducts'
import useRequestData from '../../hooks/useRequestData'
import Footer from '../../Footer/Footer'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'
import useProtectedPage from "../../hooks/useProtectedPage";


const Restaurants = () => {

    useProtectedPage();

    const params = useParams()

    const restaurants = useRequestData([], `${BASE_URL}/restaurants`)

    const renderRestaurantDetail = restaurants && restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
        if (restaurant.id === params.id) {
            return <Card sx={{ maxWidth: 345 }} 
                    key={restaurant.id}
                    >
                <CardMedia
                    component="img"
                    height="140"
                    image={restaurant.logoUrl}
                    alt="Logo do restauranta"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {restaurant.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {restaurant.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restaurant.deliveryTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {restaurant.address}
                    </Typography>
                </CardContent>
            </Card>
        }
    })

    return (
        <div>
            Restaurant Page
            <hr/>
            {renderRestaurantDetail}
            <Footer/>
            <RestaurantProducts
                restaurantId={params.id}
            />
        </div>
    )
}

export default Restaurants;
