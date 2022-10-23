import styled from "styled-components"
import logo from '../images/TrackIt.png'

export default function Header(){
    return(
        <StyledHeader>
            <StyledLogo>
                <img src={logo} alt={logo}></img>
            </StyledLogo>
            <h1>Olá</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    z-index: 1;
`
const StyledLogo = styled.div`
    img {
        width: 97px;
    }
`