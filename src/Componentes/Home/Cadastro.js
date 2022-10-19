import styled from "styled-components"
import logo from "../../images/Group8.png"
import { Link } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"

export default function Cadastro() {
    const [loading, setLoading] = useState(false)

    function submit() {
        if (loading === false) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }

    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledLogo>
                    <img src={logo} alt={logo}></img>
                </StyledLogo>

                <Formulario loading={loading ? '0.7' : '1'}>
                    <input type='text' placeholder="email" disabled={loading}></input>
                    <input type='text' placeholder="senha" disabled={loading}></input>
                    <input type='text' placeholder="nome" disabled={loading}></input>
                    <input type='text' placeholder="foto" disabled={loading}></input>
                    <button type='submit' onClick={submit}>
                        {loading ? <ThreeDots width="51" height='13' color='#FFFFFF' visible={true}/> : 'Cadastrar'}
                    </button>
                </Formulario>

                <Link to={`/`}>
                    <LinkCad>Já tem uma conta? Faça login!</LinkCad>
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
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${props => props.loading};
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