import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

export default function Historico(){
    return(
        <>
            <StyledBody>
                <Header></Header>
                <StlContent>
                    <h1>Historico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </StlContent>
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
const StlContent = styled.div`
    margin-left: 17px;
    padding-top: 30px;
    box-sizing: border-box;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
    }
`