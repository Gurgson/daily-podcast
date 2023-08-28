import { FC, ReactNode } from "react"
import styled from "styled-components"
import { flexCenter } from "../../../styles/mixins"
import ColorScheme from "../../../enums/ColorScheme"

interface IProps {
    bgcolor?:ColorScheme  
    id?:string
    children?: ReactNode
}
const Section :FC<IProps> = (props) => {
  return (
    <StyledSection id={props.id} bgcolor={props.bgcolor}>
      {props.children || "empty content"}
    </StyledSection>
  )
}
export const StyledSection = styled.section<IProps>`
  min-height: 60rem;
  position: relative;
  padding: 10rem;
  ${flexCenter}
  flex-direction: column;
  background-color: var(${p => p.bgcolor?p.bgcolor: ColorScheme.white });
  &::before {
    content: "";
    position: absolute;
    background-image: url("/decorations/scribble.svg");
    background-repeat: no-repeat;
    width: 15rem;
    height: 15rem;
    top: -7.5rem;
    left: 50;
  }
  &::after {
    content: "";
    position: absolute;
    background-image: url("/decorations/scribble.svg");
    background-repeat: no-repeat;
    width: 15rem;
    height: 15rem;
    bottom: -7.5rem;
    left: 50;
    z-index: 10;
  }
`
export default Section