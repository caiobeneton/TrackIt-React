import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { userContext } from "../App";

export default function Footer() {
    const { porcent } = useContext(userContext)
    return (
        <StyledFooter>
            <Link to={`/habitos`}>
                <StlHabitos data-identifier="habit-page-action">Hábitos</StlHabitos>
            </Link>
            <Link to={`/hoje`}>
                <StlHoje>
                    <div style={{width: 85, height: 85}}>
                        <CircularProgressbar value={porcent} text={"Hoje"} 
                    styles={buildStyles({textColor: '#FFFFFF', trailColor: '#52B6FF', pathColor: '#FFFFFF'})}/>
                    </div>
                </StlHoje>
            </Link>
            <Link to={`/historico`}>
                <StlHistorico data-identifier="historic-page-action">Historico</StlHistorico>
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