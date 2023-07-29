import { FC } from "react"
import styled from "styled-components"
interface IStyledParagraph {
    fontSize?: string,
    fontWeight?: number | string,
    color?: string,
}
interface IParagraphProps extends IStyledParagraph {
    children: string,
    
}
const Paragraph:FC<IParagraphProps> = (props) => {
  return (
    <StyledParagraph color={`color: var(${props.color || "--color-black"});`} fontSize={`font-size: var(${[props.fontSize || "--fs-body"]});`} fontWeight={props.fontWeight}>{props.children} </StyledParagraph>
  )
}
const StyledParagraph = styled.p<IStyledParagraph>`
    ${p=> p.color};
    ${p=> p.fontSize};
    font-weight: ${p=>p.fontWeight || 500};

`
export default Paragraph