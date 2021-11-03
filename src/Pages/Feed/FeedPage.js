import React from 'react'
import RestaurantCard from './RestaurantCard'
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Footer from '../../Footer/Footer'

const FeedPage = () => {

    return (
        <div>
            Feed Page
            <hr/>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Busca" variant="outlined" />
            </Box>
            <RestaurantCard/>
            <Footer/>
        </div>
    )
}

export default FeedPage