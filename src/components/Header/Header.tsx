import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Decoration from '../Decoration/Decoration'
import { DecorationHorizontalPosition, DecorationVerticalPosition } from '../Decoration/IDecoration'
import ColorScheme from '../../enums/ColorScheme'

interface IHeaderProps{
  children: ReactNode
}


const Header:FC<IHeaderProps> = (props) => {
  return (
    <StyledHeader>
        <Decoration isAnimated={true} animationDirection={false}  visableWhenWidthOver={900} href='/decorations/header-decoration-1.svg' horizontal={DecorationHorizontalPosition.left} vertical={DecorationVerticalPosition.top}/>
        <Decoration isAnimated={true} animationDirection={true} visableWhenWidthOver={600} href='/decorations/header-decoration-2.png' horizontal={77} vertical={15}/> 
        {props.children}
        
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: var(${ColorScheme.lightRed});
    
    min-height: 800px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25rem 1rem 10rem 1rem;
    /* z-index: 30; */
    text-align:center;
    overflow-x: none;
  
    
    
`

export default Header