import { useContext, useState } from "react";
import styled from "styled-components"
import Footer from "../Footer";
import Header from "../Header";
import { userContext } from "../../App";
import axios from "axios";

export default function Habitos(){

    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [select, setSelect] = useState([])
    const [habito, setHabito] = useState("")
    const [exibe, setExibe] = useState(false)
    const {token} = useContext(userContext)

    function adiciona(idx){
        if (select.includes(idx)) {
            const novo = select.filter((elem) => elem !== idx)
            setSelect(novo)
        } else {
            setSelect([...select, idx])
        }
    }

    function salvarHabito(){
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const novoHabito = {
            name: habito,
            days: select
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(URL, novoHabito, config)
        promise.then(resposta => {
            console.log(resposta.data)
        })
        promise.catch(err => {
            console.log(err.response.data)
        })
    }

    
    return(
        <>
            <StyledBody>
                <Header></Header>
                <StlContent>
                    <Topo>
                        <h1>Meus hábitos</h1>
                        <Add onClick={() => setExibe(!exibe)}>+</Add>
                    </Topo>
                    <Card disp={exibe}>
                        <input type="text" placeholder="nome do hábito" value={habito} onChange={e => setHabito(e.target.value)} ></input>
                        <Semana>
                            {dias.map((d, idx) => <Dias cor={select.includes(idx)} onClick={() => adiciona(idx)} key={idx} >{d}</Dias>)}
                        </Semana>
                        <Botoes>
                            <Cancelar>Cancelar</Cancelar>
                            <Salvar onClick={salvarHabito}>Salvar</Salvar>
                        </Botoes>
                    </Card>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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
const Topo = styled.div`
    display: flex;
    justify-content: space-between;
`
const Add = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
`
const Card = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.disp ? "inherit" : 'none'};
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        padding-left: 15px;
        margin: 18px 10px;
        &::placeholder {
            color: #DBDBDB;
        }
    }
`
const Semana = styled.div`
    display: flex;
    margin-left: 18px;
`
const Dias = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${props => props.cor ? "#FFFFFF" : "#d4d4d4"};
    background-color: ${props => props.cor ? "#d4d4d4" : "#FFFFFF"};
`
const Botoes = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: end;
    margin-right: 15px;
`
const Cancelar = styled.div`
    width: 84px;
    height: 35px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Salvar = styled.div`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`