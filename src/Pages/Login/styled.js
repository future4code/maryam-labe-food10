import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  img {
    width: 30vw;
    max-width: 350px;
  }

  button {
    width: 80vw;
    max-width: 450px;
  }
`;

export const TextSignUp = styled.p`
  font-family: Roboto-Regular;
`;
