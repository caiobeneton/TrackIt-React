import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../../images/Group8.png'

export default function Login(){
    return(
        <StyledContainer>
            <StyledWrapper>
                <StyledLogo>
                    <img src={logo} alt={logo}></img>
                </StyledLogo>

                <Formulario>
                    <input type='text' placeholder="email"></input>
                    <input type='text' placeholder="senha"></input>
                    <button type='submit'>Entrar</button>
                </Formulario>

                <Link to={`/cadastro`}>
                    <LinkCad>Não tem uma conta? Cadastre-se!</LinkCad>
                </Link>

            </StyledWrapper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;
`

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 414px;
`

const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 180px;
    }
`

const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 32px;
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-left: 15px;
        margin-bottom: 6px;
        &::placeholder {
            color: #DBDBDB;
        }
    }
    button {
        width: 320px;
        height: 45px;
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
    }
`

const LinkCad = styled.div`
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
`