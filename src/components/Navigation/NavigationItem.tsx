import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IProps  {
    body : string | ReactNode,
    href: string,
}

const NavigationItem:FC<IProps> = (props) => {
  return (
    <StyledLink to={props.href}>
        {props.body}
    </StyledLink>
  )
}
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  margin: 2rem;
  
`;
export default NavigationItem;