import React, {useContext} from 'react'
import { goToRestaurants } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'
import GlobalStateContext from '../../Global/GlobalStateContext'

const RestaurantCard = (props) => {

  const history = useHistory()

  const {restaurants} = useContext(GlobalStateContext)

  const selectedRestaurants = restaurants && restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(props.search.toLowerCase())
})

const renderRestaurants = selectedRestaurants && selectedRestaurants.length !==0 && selectedRestaurants.map((restaurant) => {
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
         
         {renderRestaurants && renderRestaurants.length !== 0 ? renderRestaurants : 
            props.search.length === 0 ? renderRestaurants : <h2>Não encontramos :(</h2>}
        </div>
    )
}

export default RestaurantCard