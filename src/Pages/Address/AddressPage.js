import React from 'react'
import { ScreenContainer, InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { Button, TextField } from '@material-ui/core'
import { goToFeed } from '../../Router/Coordinator'
import { useHistory } from 'react-router'

import useProtectedPage from '../../hooks/useProtectedPage'

const AddressPage = () => {
    useProtectedPage()
    const token = localStorage.getItem("token")
    const [form, onChange, clear] = useForm({ 
        street: "", 
        number: "", 
        neighbourhood: "", 
        city: "",
        state: "",
        complement: ""
    })
    
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        addAddress()
    } 
    const addAddress = () => {
        axios.put(`${BASE_URL}/address`, form, {
            headers:{
                auth: `${token}`
            }
        }).then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        }).catch((err)=>{
            console.log("erro", err)
        })
    }
    return (
        <ScreenContainer>
            <InputsContainer>
                <p>Meu Endereço</p>
                <form onSubmit={onSubmitForm}>
                <TextField
                        type={"text"}
                        name={"street"}
                        value={form.street}
                        onChange={onChange}
                        label={"Rua/Avenida:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"number"}
                        name={"number"}
                        value={form.number}
                        onChange={onChange}
                        label={"Número:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"text"}
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={onChange}
                        label={"Bairro:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"text"}
                        name={"state"}
                        value={form.state}
                        onChange={onChange}
                        label={"Estado:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"text"}
                        name={"city"}
                        value={form.city}
                        onChange={onChange}
                        label={"Cidade:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"text"}
                        name={"complement"}
                        value={form.complement}
                        onChange={onChange}
                        label={"Complemento:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                    />
                     <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        Salvar
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default AddressPage