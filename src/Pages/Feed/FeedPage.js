import React from 'react'
import RestaurantCard from './RestaurantCard'
import useForm from '../../hooks/useForm'
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Footer from '../../Footer/Footer'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedPage = () => {

    useProtectedPage()

    const [form, onChangeInput] = useForm({
        search: ''
    })

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
                <TextField 
                    id="outlined-basic"
                    name='search'
                    value={form.search}
                    onChange={onChangeInput}
                    label="Busca" 
                    variant="outlined"    
                />
            </Box>
            <RestaurantCard
                search={form.search}
            />
            <Footer/>
        </div>
    )
}

export default FeedPage;
