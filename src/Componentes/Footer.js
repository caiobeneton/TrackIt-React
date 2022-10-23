import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer(){
    return(
        <StyledFooter>
            <Link to={`/habitos`}>
                <StlHabitos>Hábitos</StlHabitos>
            </Link>
            <Link to={`/hoje`}>
               <StlHoje>Hoje</StlHoje> 
            </Link>
            <Link to={`/historico`}>
                <StlHistorico>Historico</StlHistorico>
            </Link>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;
`
const StlHabitos = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
`
const StlHoje = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 40px;
`
const StlHistorico = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
`