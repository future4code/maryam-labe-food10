import React from 'react'
import { URL } from '../../constants/URL'
import useRequestData from '../../hooks/useRequestData'
import { goToRestaurants } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'

const RestaurantCard = () => {

    const history = useHistory()

    const restaurants = useRequestData([], `${URL}/restaurants`)

    const renderRestaurants = restaurants && restaurants.restaurants && restaurants.restaurants.map((restaurant) => {
        return <Card sx={{ maxWidth: 345 }} 
                onClick={() => goToRestaurants(history, restaurant.id)}
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
          <Typography variant="body2" color="text.secondary">
            {restaurant.description}
          </Typography>
        </CardContent>
      </Card>
    })

    return (
        <div>
            {renderRestaurants}
        </div>
    )
}

export default RestaurantCard