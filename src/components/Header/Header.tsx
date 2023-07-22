import { FC } from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'



const Header:FC = () => {
  return (
    <StyledHeader>
        <Navigation/>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: var(--color-red-light);
    min-height: 600px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        background-image: url("/images/header-decoration-1.svg");
        background-repeat: no-repeat;
        left:0%;
        top:5%;
        z-index: 1; 
        width: 500px;
        height: 500px;
    }
    &::after{
        content: "";
        position: absolute;
        background-image: url("/images/header-decoration-2.svg");
        background-repeat: no-repeat;
        right:0;
        top:25%;
        background-clip: border-box;
        z-index: 1; 
        width: 92px;
        height: 167px;
        background-size:100% 100%;
    }

`

export default Header