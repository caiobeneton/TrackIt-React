import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from '../../images/Group8.png'
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react"
import axios from "axios"

export default function Login(){
    const [loading, setLoading] = useState(false)
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    function submit() {
        setLoading(true)
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const user = {
            email: email,
            password: senha
        }

        const promise = axios.post(URL, user)

        promise.then(resposta => {
            console.log(resposta.data)
            navigate('/hoje')
        })

        promise.catch(err => {
            console.log(err.response.data)
            alert('Preencha os campos corretamente!')
            setLoading(false)
        })
    }

    return(
        <StyledContainer>
            <StyledWrapper>
                <StyledLogo>
                    <img src={logo} alt={logo}></img>
                </StyledLogo>

                <Formulario loading={loading ? '0.7' : '1'}>
                    <input type='text' placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={loading}></input>
                    <input type='text' placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} disabled={loading}></input>
                    <button type='submit' onClick={submit}>
                        {loading ? <ThreeDots width="51" height='13' color='#FFFFFF' visible={true}/> : 'Entrar'}
                    </button>
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