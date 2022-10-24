import styled from "styled-components"
import Footer from "../Footer";
import Header from "../Header";

export default function Habitos(){


    return(
        <>
            <StyledBody>
                <Header></Header>
                <h1>Habitos</h1>
                <Footer></Footer>
            </StyledBody>
        </>
    )
}

const StyledBody = styled.div`
    background-color: #E5E5E5;
    height: 530px;
    width: 100%;
    margin-top: 70px;
`