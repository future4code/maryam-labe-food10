import { ButtonBase } from "@material-ui/core";
import { KeyboardArrowLeft } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";
import { goToBack, goToLogin } from "../Router/Coordinator";

const Container = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 0.5px gray solid;
padding: 6px;

`
const P = styled.p`
margin: 0px 20px;
`
const P2 = styled.p`
margin: 0px 16px 0px 0px;
`

const Header = (props) => {
    

    const goBack = (history) => {
        goToBack(history)
    }
    const actionLogout = (history) => {
        localStorage.removeItem("token")
        goToLogin(history)
    }

    return (
        <Container>
            {props.history ? <ButtonBase onClick={()=>goBack(props.history)}>
               <P2> <KeyboardArrowLeft /> </P2>
            </ButtonBase> : <P></P>}
            <p>{props.title ? props.title : " "}</p>
            {props.logout ? <ButtonBase onClick ={()=>actionLogout(props.logout)}><p>Logout</p></ButtonBase> : <P>  </P>}


        </Container>
    )
}
export default Header