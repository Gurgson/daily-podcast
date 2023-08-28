import {FC} from 'react'
import { IResult } from '../../../Data/Results'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Paragraph, { StyledParagraph } from '../../Text/Paragraph'
import FontSizes from '../../../enums/FontSizes'
import ColorScheme from '../../../enums/ColorScheme'
interface IProps {
    result: IResult
}
const ResultCards : FC<IProps> = (props) => {
  return (
    <StyledContainer>
        <StyledTopParagraph lineHeight='120%' fontSize={FontSizes.heading} fontWeight={700}>{props.result.countInThausands}<span>K</span> </StyledTopParagraph>
        <Paragraph lineHeight='160%' color={ColorScheme.grey}>{props.result.subject}</Paragraph>
    </StyledContainer>
  )
}
const StyledTopParagraph = styled(StyledParagraph)`
    letter-spacing: -1px;
    & > span {
        color: var(${ColorScheme.red})
    }
`
const StyledContainer = styled(motion.div)`
    border-radius: 0.8rem;
    border: 1px solid var(${ColorScheme.black});
    background-color: var(${ColorScheme.white});
    box-shadow: 0.6rem 0.6rem 0.6rem 0 var(${ColorScheme.red});
    height: 23.5rem;
    width: 37rem;
    text-align: center;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export default ResultCards