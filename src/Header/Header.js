import { ButtonBase } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { goToBack } from "../Router/Coordinator";

const Container = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 0.5px gray solid;
padding: 6px;
`

const Header = () => {
    const history = useHistory()

    const goBack = () => {
        goToBack(history)
    }

    return (
        <Container>
            <ButtonBase onClick={goBack}>
                <KeyboardArrowLeft />
            </ButtonBase>

        </Container>
    )
}
export default Header