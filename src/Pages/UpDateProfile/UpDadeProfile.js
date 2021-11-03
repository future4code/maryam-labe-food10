import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToProfile } from "../../Router/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";

const UpDateProfile = () => {
    useProtectedPage();

    const [form, onChange, clear, setForm] = useForm({
        name: "",
        email: "",
        cpf: ""
    })
   
    const history =useHistory()
    const token = localStorage.getItem('token')
    const onSubmitForm = (event) => {
        event.preventDefault()
        upDate()
        goToProfile(history)
    }
    useEffect(()=>{
        getProfile()
    },[])
    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, {
            headers:{
                auth: `${token}`
            }}).then((res)=> {
                setForm({...form,
                     name: res.data.user.name,
                     email: res.data.user.email,
                     cpf: res.data.user.cpf
                })
            }).catch((err)=> {
                console.log("erro", err)
            })
    }
    
    const upDate = () => {
        axios.put(`${BASE_URL}/profile`, form, {
            headers:{
                auth: `${token}`
            }}).then((res) => {
                console.log("atualizado ", res.data)
            }).catch((err)=>{
                console.log("erro ", err)
            })
    }

    return (
        <ScreenContainer>
            <InputsContainer>
                <p>Editar Perfil</p>
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
};

export default UpDateProfile;