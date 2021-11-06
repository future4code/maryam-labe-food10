import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DivWhite = styled.div`
  margin: 5vh;
`;
export const CardContainer = styled.div`
  display: flex;

  img {
    width: 97px;
    height: 112.6px;
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    border: 1px solid #e86e5a;
    background-color: white;
    color: #e86e5a;
    border-radius: 12px;
    margin: 4px 0;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
