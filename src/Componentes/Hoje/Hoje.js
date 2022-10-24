import styled from "styled-components"
import Footer from "../Footer";
import Header from "../Header";

export default function Hoje(){
    return (
        <>
            <StyledBody>
                <Header></Header>
                <StyledContent>
                    <Topo>
                        <h1>Hoje</h1>
                    </Topo>
                </StyledContent>
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
const StyledContent = styled.div`
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
`
const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 10px;
`