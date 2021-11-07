import styled from "styled-components";

export const ProfileAddress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.23);

  button {
    border: none;
    background-color: white;
  }

  img {
    width: 20px;
  }
`;
export const ProfileData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border: 0.5px solid black;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.23);

  button {
    border: none;
    background-color: white;
  }

  img {
    width: 20px;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4{
    margin: 0 8px;
  }
`;
export const DivHistory = styled.div`
padding: 0 8px;

`
export const CardHistory = styled.div`
padding: 0 8px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.23);

`
