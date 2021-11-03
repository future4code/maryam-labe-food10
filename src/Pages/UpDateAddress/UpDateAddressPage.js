import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToProfile } from "../../Router/Coordinator";
import { InputsContainer, ScreenContainer } from "./styled";

const UpDateAddress = () => {
  useProtectedPage();

  const [form, onChange, clear, setForm] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  })

  const history = useHistory()
  const token = localStorage.getItem('token')
  const onSubmitForm = (event) => {
    event.preventDefault()
    upDate()
    goToProfile(history)
  }
  useEffect(() => {
    getProfile()
  }, [])
  const getProfile = () => {
    axios.get(`${BASE_URL}/profile/address`, {
      headers: {
        auth: `${token}`
      }
    }).then((res) => {
      setForm({
        ...form,
        street: res.data.address.street,
        number: res.data.address.number,
        neighbourhood: res.data.address.neighbourhood,
        city: res.data.address.city,
        state: res.data.address.state,
        complement: res.data.address.complement
      })
    }).catch((err) => {
      console.log("erro", err)
    })
  }

  const upDate = () => {
    axios.put(`${BASE_URL}/address`, form, {
      headers: {
        auth: `${token}`
      }
    }).then((res) => {
      console.log("atualizado ", res.data)
    }).catch((err) => {
      console.log("erro ", err)
    })
  }

  return (
    <ScreenContainer>
      <InputsContainer>
        <p>Editar Endereço</p>
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
};

export default UpDateAddress;