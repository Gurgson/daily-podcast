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
  /* overflow-y: hidden; */
  min-height: 60rem;
  width: 100%;
  position: relative;
  z-index: 100;
  padding: 10rem 0;
  ${flexCenter};
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
    z-index: 50;
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
    z-index: 50;
  }
`
export default Section