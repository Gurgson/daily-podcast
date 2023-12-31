import { FC, ReactNode } from "react"
import styled from "styled-components"
import ColorScheme from "../../enums/ColorScheme"

interface IStyledProps {
  color?: ColorScheme
}

interface IProps extends IStyledProps{
    props: {
      icon: ReactNode,
      href: string,
      ariaLabel: string,
    }
    
}


const SocialMediaIcon:FC<IProps> = ({props, color}) => {
  return (
    <StyledLink href={props.href} aria-label={props.ariaLabel}>
      <StyledIcon color={color}>
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
    color: var(${p=>p.color?p.color:ColorScheme.lightRed});
    
     
   
  }

`
export default SocialMediaIcon