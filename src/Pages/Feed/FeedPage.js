import React, {useContext, useEffect} from 'react'
import useRequestData from '../../hooks/useRequestData'
import RestaurantCard from './RestaurantCard'
import useForm from '../../hooks/useForm'
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Footer from '../../Footer/Footer'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../Global/GlobalStateContext'
import Header from '../../Header/Header'
import { useHistory } from 'react-router'

const FeedPage = () => {

    useProtectedPage()
    const history = useHistory()

    const {isClicked, setIsClicked} = useContext(GlobalStateContext)

    const [form, onChangeInput] = useForm({
        search: ''
    })

    const renderOptions = () => {
        setIsClicked(true)
    }

    const renderCards = () => {
        setIsClicked(false)
    }

    useEffect(() => {
        renderCards()
    }, [form])

    const makeSearch = <p>Faça sua busca</p>

    return (
        <div>
            <Header title={"Rappi4"} logout={history}/>
            <hr/>
            {isClicked ? <button onClick={() => renderCards()}>Cancelar</button> : null}
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
                    onClick={form.search ? null : () => renderOptions()}
                />
            </Box>
            {isClicked ? makeSearch : <RestaurantCard
                search={form.search}
            />}
            <Footer feed = {true}/>
        </div>
    )
}

export default FeedPage;