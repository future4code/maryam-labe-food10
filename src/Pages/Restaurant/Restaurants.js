import React, {useContext} from 'react'
import styled from 'styled-components'
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
import GlobalStateContext from '../../Global/GlobalStateContext'

const Restaurants = () => {

    useProtectedPage();

    const params = useParams()

    const {isAmount, setIsAmount} = useContext(GlobalStateContext)

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

    const chooseAmount = () => {
        setIsAmount(true)
    }

//     const selectAmount = <div>
//         <p>Selecione a quantidade desejada</p>
//     <select size='1' autoFocus>
//         <option value='1'>1</option>
//         <option value='2'>2</option>
//         <option value='3'>3</option>
//         <option value='4'>4</option>
//         <option value='5'>5</option>
//         <option value='6'>6</option>
//         <option value='7'>7</option>
//         <option value='8'>8</option>
//         <option value='9'>9</option>
//         <option value='10'>10</option>
//     </select>
//     <button onClick>Adicionar</button>
// </div>

    return (
        <div>
            Restaurant Page
            {/* {isAmount ? selectAmount : null} */}
            <hr/>
            {renderRestaurantDetail}
            <Footer/>
            <RestaurantProducts
                chooseAmount={chooseAmount}
                restaurantId={params.id}
            />
            
        </div>
    )
}

export default Restaurants;
