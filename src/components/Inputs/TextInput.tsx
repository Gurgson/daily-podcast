import { FC, HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'
import ColorScheme from '../../enums/ColorScheme'
import FontSizes from '../../enums/FontSizes'
import { motion } from 'framer-motion'
import { focusAnimation, tapAnimation } from './inputsAnimations'
import Label, { LabelProps } from './Label'
type InputProps =  {
    type?: HTMLInputTypeAttribute
    placeholder?: string 
    label: LabelProps
}

interface ITextInputsProps {
    options: InputProps
}

const TextInput:FC<ITextInputsProps> = (props) => {
    const inputType = props.options.type || "text";
    return (
        <StyledContainer >
            <Label labelData={props.options.label}/>
            <StyledInput whileTap={tapAnimation} whileFocus={focusAnimation} id={props.options.label.for} name={props.options.label.for} type={inputType} required={props.options.label.isRequired || false} placeholder={props.options.placeholder || "Lorem"}/>
        </StyledContainer>
        
    )
}
const StyledInput = styled(motion.input)`
    width: 100%;
    padding: 2rem;
    border-radius: 8px;
    border: 2px solid var(${ColorScheme.black});
    font-size: var(${FontSizes.body});
    @media screen and (max-width: 1240px) {
        min-width: 70rem;
    }

`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    gap: 1.6rem;
    width: 45%;
    
    @media screen and (max-width: 1240px) {
        width:100%; 
    }
`
export default TextInput