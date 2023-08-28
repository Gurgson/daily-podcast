import { FC, ReactNode } from 'react'
import {HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import ColorScheme from '../../enums/ColorScheme'

interface IProps  {
    body : string | ReactNode,
    href: string,
}

const NavigationItem:FC<IProps> = (props) => {
  return (
    <StyledLink smooth to={props.href}>
        {props.body}
    </StyledLink>
  )
}
const StyledLink = styled(HashLink)`
  text-decoration: none;
  color: var(${ColorScheme.black});
  margin: 2rem;
  
`;
export default NavigationItem;