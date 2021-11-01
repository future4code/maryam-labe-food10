import { Button, TextField } from '@material-ui/core'
import React from 'react'
import useForm from '../../hooks/useForm'
import logoFutureEatsInvert from "../../assets/logoFutureEatsInvert.png"
import { ScreenContainer, InputsContainer, TextSignUp } from './styled'
import axios from 'axios'
import { goToAddress } from '../../Router/Coordinator'
import { useHistory } from 'react-router'

const SignUpPage = () => {
    const [form, onChange, clear] = useForm({ name: "", email: "", cpf: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp()
    }

    const signUp = () => {
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/rappi4D/signup', form)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
            clear()
            goToAddress(history)
        }).catch((err)=>{
            console.log("deu erro", err)
        })
        
    }
    return (
        <ScreenContainer>
            <img src={logoFutureEatsInvert} alt="logo Rappi4" />
            <InputsContainer>
                <TextSignUp>Cadastrar</TextSignUp>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        type={"text"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />

                    <TextField
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />

                    <TextField
                        type={"text"}
                        name={"cpf"}
                        value={form.cpf}
                        onChange={onChange}
                        label={"CPF:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />

                    <TextField
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    />
                     <TextField
                        type={"password"}
                        name={"comfirm"}
                        label={"Comfirmar:"}
                        variant={"outlined"}
                        margin={"normal"}
                        fullWidth
                        required
                    /> 
                    <Button
                        type={'submit'}
                        fullWidth
                        variant={"contained"}
                        color={'primary'}
                        margin={"normal"}
                    >
                        Fazer Cadastro!
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}

export default SignUpPage