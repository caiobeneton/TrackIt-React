import styled from "styled-components"
import Footer from "../Footer";
import Header from "../Header";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import axios from "axios";


export default function Hoje() {
    const now = dayjs().locale('pt-br').format('dddd, DD/MM', 'pt-br')
    const { token, setPorcent } = useContext(userContext)
    const [hoje, setHoje] = useState([])
    const [control, setControl] = useState(false)
    const [count, setCount] = useState(0)


    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const promise = axios.get(URL, { headers: { Authorization: `Bearer ${token}` } })
        promise.then(resposta => {
            setHoje(resposta.data)
            const lista = resposta.data
            contagem(lista)
        })
        promise.catch(err => {
            console.log(err.response.data)
        })
    }, [token, control])

    function contagem(lista) {
        setCount(0)
        lista.map((h) => h.done ? setCount(count + 1) : '')
        setPorcent((count*100) / lista.length)
    }

    function marcar(id, feito) {
        if (feito === false) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            const promise = axios.post(URL, null, { headers: { Authorization: `Bearer ${token}` } })
            promise.then(resposta => {
                setControl(!control)
            })
            promise.catch(err => {
                console.log(err.response.data)
            })
        } else {
            const URLdel = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            const promise = axios.post(URLdel, null, { headers: { Authorization: `Bearer ${token}` } })
            promise.then(resposta => {
                setControl(!control)
            })
            promise.catch(err => {
                console.log(err.response.data)
            })
        }
        
    }

    

    return (
        <>
            <StyledBody>
                <Header></Header>
                <StyledContent>
                    <Topo data-identifier="today-infos" disp={count > 0 ? 'none' : 'inherit'}>
                        <h1>{now}</h1>

                        <p>Nenhum hábito concluído ainda</p>
                        <Msg disp={count === 0 ? "none" : "inherit"}>{Math.round((count*100)/hoje.length)}% dos hábitos concluídos</Msg>
                    </Topo>
                    {hoje.map((h) => <HabitoHoje key={h.id}>
                        <Info data-identifier="today-infos">
                            <h1>{h.name}</h1>
                            <Frase>Sequencia atual: <Num feito={h.done ? "#8FC549" : "#BABABA"}>{h.currentSequence} dias</Num></Frase>
                            <p>Seu recorde: {h.highestSequence} dias</p>
                        </Info>
                        <Check data-identifier="done-habit-btn" onClick={() => marcar(h.id, h.done)} feito={h.done ? "#8FC549" : "#ebebeb"}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </Check>
                    </HabitoHoje>)}
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
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #BABABA;
    }
`
const Topo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 10px;
    p {
        display: ${props => props.disp};
    }
`
const HabitoHoje = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
`
const Info = styled.div`
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }
    p {
        font-size: 14px;
    }
`
const Check = styled.div`
    width: 70px;
    height: 70px;
    background-color: ${props => props.feito};
    display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
        font-size: 42px;
        color: #FFFFFF;
    }
`
const Num = styled.div`
    color: ${props => props.feito};
    display: inline;
`
const Frase = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #BABABA;
`
const Msg = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #8FC549;
    display: ${props => props.disp};
`