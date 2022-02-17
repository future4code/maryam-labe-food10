import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../../constants/urls";
import Header from "../../Header/Header";
import useForm from "../../Hooks/useForm";
import useProtectedPage from "../../Hooks/useProtectedPage";
import {
  goToProfile,
  goToUpDateProfile,
  goToUpDateAddress,
} from "../../Router/Coordinator";
import edit from "../../assets/edit.png";
import Footer from "../../Footer/Footer";
import { ProfileAddress, ProfileData, ProfileContainer } from "./styled";
import OrderHistory from "./OrderHistory";

const ProfilePage = () => {
  useProtectedPage();

  const [form, onChange, clear, setForm] = useForm({
    name: "",
    email: "",
    cpf: "",
    address: "",
  });

  const history = useHistory();

  const token = localStorage.getItem("token");
  const onSubmitForm = (event) => {
    event.preventDefault();
    goToProfile(history);
  };
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: `${token}`,
        },
      })
      .then((res) => {
        setForm({
          ...form,
          name: res.data.user.name,
          email: res.data.user.email,
          cpf: res.data.user.cpf,
          address: res.data.user.address,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <ProfileContainer>
        <Header history={history} title={"Perfil"} logout={history} />
        <br/><h4>Dados cadastrados:</h4>
        <ProfileData>
          <div>
            <p>{form.name}</p>
            <p>{form.email}</p>
            <p>{form.cpf}</p>
          </div>
          <button onClick={() => goToUpDateProfile(history)}>
            <img src={edit} />
          </button>
        </ProfileData>

        <h4>Endereço cadastrado:</h4>
        <ProfileAddress>
          <p>{form.address}</p>
          <button onClick={() => goToUpDateAddress(history)}>
            <img src={edit} />
          </button>
        </ProfileAddress>

        <OrderHistory />
      </ProfileContainer>
      <Footer profile={true} />
    </div>
  );
};

export default ProfilePage;
