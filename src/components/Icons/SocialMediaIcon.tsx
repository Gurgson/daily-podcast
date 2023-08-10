import { FC, ReactNode } from "react"
import styled from "styled-components"

interface IStyledProps {
  color?: string
}

interface IProps extends IStyledProps{
    icon: ReactNode,
    href: string,
    
}


const SocialMediaIcon:FC<IProps> = (props) => {
  return (
    <StyledLink href={props.href}>
      <StyledIcon color={props.color}>
       {props.icon }
      </StyledIcon>
    </StyledLink>
  )
}
const StyledLink = styled.a`
  display: block;
  transition: 1s;
  &:hover {
    transform: translateY(-0.25rem);
  }
  
`
const StyledIcon = styled.div<IStyledProps>` 
  & > *{
    text-decoration: none;
    width: 2.4rem;
    height: 2.4rem;
    color: var(${p=>p.color?p.color:"--color-red-light"});
    
     
   
  }

`
export default SocialMediaIcon