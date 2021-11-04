import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background-color: white;
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;
