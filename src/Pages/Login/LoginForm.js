import useForm from "../../hooks/useForm";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { goToFeed } from "../../Router/Coordinator";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import { ContainerForm } from "./styled";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        goToFeed(history);
      })
      .catch((err) => {
        alert("Erro no login!");
      });
  };

  return (
    <div>
      <ContainerForm onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Entrar
        </Button>
      </ContainerForm>
    </div>
  );
};

export default LoginForm;
