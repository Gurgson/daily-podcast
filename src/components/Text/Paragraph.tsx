import { FC } from "react"
import styled from "styled-components"
interface IStyledParagraph {
    fontSize?: string,
    fontWeight?: number | string,
    color?: string,
    lineHeight?: string,
    wordSpacing?: string,
    margin?: string
}
interface IParagraphProps extends IStyledParagraph {
    children: string,
    
}
const Paragraph:FC<IParagraphProps> = (props) => {
  return (
    <StyledParagraph margin={props.margin} wordSpacing={props.wordSpacing} lineHeight={props.lineHeight} color={`color: var(${props.color || "--color-black"});`} fontSize={`font-size: var(${[props.fontSize || "--fs-body"]});`} fontWeight={props.fontWeight}>{props.children} </StyledParagraph>
  )
}
export const StyledParagraph = styled.p<IStyledParagraph>`
    ${p=> p.color};
    margin: ${p=>p.margin};
    ${p=> p.fontSize};
    line-height: ${p=> p.lineHeight || "100%"};
    font-weight: ${p=>p.fontWeight || 500};
    word-spacing: ${p=>p.wordSpacing || 0};

`
export default Paragraph