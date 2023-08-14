import { FC, ReactNode } from "react"
import styled from "styled-components"
import { flexCenter } from "../../../styles/mixins"

interface IProps {
    bgcolor?:string
    children?: ReactNode
}
const Section :FC<IProps> = (props) => {
  return (
    <StyledSection>
      {props.children || "empty content"}
    </StyledSection>
  )
}
const StyledSection = styled.section<IProps>`
  min-height: 60rem;
  position: relative;
  padding: 10rem;
  ${flexCenter}
  background-color: var(${p => p.bgcolor?p.bgcolor:"--color-white"});
  &::before {
    content: "";
    position: absolute;
    background-image: url("/decorations/scribble.svg");
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    top: -75px;
    left: 50;
  }
  &::after {
    content: "";
    position: absolute;
    background-image: url("/decorations/scribble.svg");
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    bottom: -75px;
    left: 50;
    z-index: 10;
  }
`
export default Section