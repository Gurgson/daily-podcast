import { FC, ReactNode} from "react"
import styled from "styled-components"
import FontSizes from "../../enums/FontSizes"
import ColorScheme from "../../enums/ColorScheme"
interface IStyledParagraph {
    fontSize?: FontSizes,
    fontWeight?: number | string,
    color?: ColorScheme,
    lineHeight?: string,
    wordSpacing?: string,
    margin?: string
}
interface IParagraphProps extends IStyledParagraph {
    children: string  | ReactNode
    
}
const Paragraph:FC<IParagraphProps> = (props) => {
  return (
    <StyledParagraph margin={props.margin} wordSpacing={props.wordSpacing} lineHeight={props.lineHeight} color={props.color} fontSize={props.fontSize} fontWeight={props.fontWeight}>{props.children} </StyledParagraph>
  )
}
export const StyledParagraph = styled.p<IStyledParagraph>`
    position: relative;
    margin: ${p=>p.margin};
    color: var(${p => p.color || ColorScheme.black});
    font-size: var(${p => p.fontSize || FontSizes.body});
    line-height: ${p=> p.lineHeight || "100%"};
    font-weight: ${p=>p.fontWeight || 500};
    word-spacing: ${p=>p.wordSpacing || 0};
    /* text-align: center; */
  
`
export default Paragraph