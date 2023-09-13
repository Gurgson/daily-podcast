import { FC } from 'react'
import styled from 'styled-components'
import ColorScheme from '../../enums/ColorScheme'
import FontSizes from '../../enums/FontSizes'
import { motion } from 'framer-motion'
import { focusAnimation, tapAnimation } from './inputsAnimations'
import Label, { LabelProps } from './Label'
type TextAreaProps = {
    placeholder?: string,
    label: LabelProps
}

interface ITextAreaProps {
    options: TextAreaProps
}

const Textarea:FC<ITextAreaProps> = (props) => {
    return (
        <StyledContainer >
            <Label labelData={props.options.label}/>
            <StyledTextarea whileTap={tapAnimation} whileFocus={focusAnimation} id={props.options.label.for} name={props.options.label.for} required={props.options.label.isRequired || false} placeholder={props.options.placeholder || "Lorem"}/>
        </StyledContainer>
        
    )
}
const StyledTextarea = styled(motion.textarea)` 
    padding: 2rem;
    border-radius: 8px;
    border: 2px solid var(${ColorScheme.black});
    font-size: var(${FontSizes.body});
    width: 100%;
    min-height: 16.5rem;
    box-sizing: border-box;

`
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    gap: 1.6rem;
    flex: 100%;
    width: 100%;
`
export default Textarea