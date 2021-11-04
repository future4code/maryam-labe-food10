import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import logoFutureEatsInvert from "../../assets/logoFutureEatsInvert.png";
import { ScreenContainer, InputsContainer, TextSignUp } from "./styled";
import axios from "axios";
import { goToAddress } from "../../Router/Coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
// import { BASE_URL } from "../../Constants/urls";
import {BASE_URL} from '../../constants/urls'
import Header from "../../Header/Header";

const SignUpPage = () => {
    useUnprotectedPage();
    const [form, onChange, clear] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    });

    const history = useHistory();

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(form.password !== form.confirm){
            alert("As senhas não estão iguais")
        }else{
            signUp(form, history, clear);
        }
    };

    const signUp = (form, history, clear) => {
        axios
            .post(`${BASE_URL}/signup`, form)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                clear();
                goToAddress(history);
            })
            .catch((err) => {
                console.log("deu erro", err);
            });
    };
    return (
        <div>
            <Header history={history}/>
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
                        name={"confirm"}
                        value={form.confirm}
                        onChange={onChange}
                        label={"Confirmar:"}
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
                        Fazer Cadastro!
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
        </div>
    );
};

export default SignUpPage;
