import  { FC } from 'react'
import FontSizes from '../../enums/FontSizes'
import styled from 'styled-components'
import ColorScheme from '../../enums/ColorScheme'

export type LabelProps = {
    text: string,
    for: string
    isRequired?: boolean,
}
interface IProps{
    labelData: LabelProps
}

const Label :FC<IProps> = (props) => {
  return (
    <StyledLabel htmlFor={props.labelData.for}> {props.labelData.text} { props.labelData.isRequired && <span>*</span>}</StyledLabel>
  )
}
const StyledLabel = styled.label`
    font-size: var(${FontSizes.caption}); 
    line-height: 160%;
    & span {
        color: var(${ColorScheme.red});
    }
`

export default Label 
