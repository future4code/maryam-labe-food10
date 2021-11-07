import React, { useContext, useEffect, useState } from 'react'
import { goToRestaurants } from '../../Router/Coordinator'
import { useHistory } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { Card } from '@material-ui/core'
import GlobalStateContext from '../../Global/GlobalStateContext'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import styled from 'styled-components'

const Div = styled.div`
display: flex;
justify-content: space-between;
`

const RestaurantCard = (props) => {
  const [restaurants, setRestaurants] = useState()
  const history = useHistory()

  useEffect(() => {
    axios.get(`${BASE_URL}/restaurants`, {
      headers: {
        auth: localStorage.getItem('token')
      }
    }).then((res) => {
      setRestaurants(res.data.restaurants)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const selectedRestaurants = restaurants && restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(props.search.toLowerCase())
  })

  const renderRestaurants = selectedRestaurants && selectedRestaurants.length !== 0 && selectedRestaurants.map((restaurant) => {
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
        <Div>
          <Typography variant="body2" color="text.secondary">
            {restaurant.deliveryTime} min
          </Typography>
          <Typography variant="body2" color="text.secondary">
            FRETE R${restaurant.shipping}
          </Typography>
        </Div>
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