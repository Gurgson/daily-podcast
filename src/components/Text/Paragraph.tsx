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
    <StyledParagraph margin={props.margin} wordSpacing={props.wordSpacing} lineHeight={props.lineHeight} color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight}>{props.children} </StyledParagraph>
  )
}
export const StyledParagraph = styled.p<IStyledParagraph>`
    
    margin: ${p=>p.margin};
    color: var(${p => p.color || "--color-black"});
    font-size: var(${p => p.fontSize || "--fs-body"});
    line-height: ${p=> p.lineHeight || "100%"};
    font-weight: ${p=>p.fontWeight || 500};
    word-spacing: ${p=>p.wordSpacing || 0};
  
`
export default Paragraph