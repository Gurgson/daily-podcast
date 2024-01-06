import { FC, ReactNode } from 'react'
import {HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import ColorScheme from '../../enums/ColorScheme'

interface IProps  {
    children : string | ReactNode,
    props:{
      href: string,
      underlined?: boolean
    }
}

const NavigationItem:FC<IProps> = ({props,children}) => {
  return (
    <StyledLink smooth to={props.href} $underlined={props.underlined}>
        {children}
    </StyledLink>
  )
}
const StyledLink = styled(HashLink)<{$underlined?: boolean}>`
  text-decoration: none;
  color: var(${ColorScheme.black});
  border-bottom: 1px solid transparent;
  margin: 2rem 0;
  display: inline-block;
  position: relative;
  &::after {
  content: '';
  position: absolute;
  width: 75%;
  transform: scaleX(0);
  height: 2px;
  bottom: -1rem;
  left: 12.5%;
  background-color: var(${ColorScheme.red});
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  
}

&:hover::after {
  transform: scaleX(${p=>(p.$underlined)?1:0});
  transform-origin: bottom left;
}
  
  

`;
export default NavigationItem;