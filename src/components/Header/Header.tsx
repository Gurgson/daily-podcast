import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Decoration from '../Decoration/Decoration'
import { DecorationHorizontalPosition, DecorationVerticalPosition } from '../Decoration/IDecoration'

interface IHeaderProps{
  children: ReactNode
}


const Header:FC<IHeaderProps> = (props) => {
  return (
    <StyledHeader>
        <Decoration href='/decorations/header-decoration-1.svg' horizontal={DecorationHorizontalPosition.left} vertical={DecorationVerticalPosition.top}/>
        <Decoration href='/decorations/header-decoration-2.png' horizontal={85} vertical={15}/>
        <StyledMain>
          {props.children}
        </StyledMain>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
    background-color: var(--color-red-light);
    min-height: 600px;
    position: relative;
    
    
`
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  padding-bottom: 6rem;
`

export default Header