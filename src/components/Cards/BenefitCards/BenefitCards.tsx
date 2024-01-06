import { FC } from "react"
import { IBenefits } from "../../../Data/Benefits"
import styled from "styled-components"
import { flexCenter } from "../../../styles/mixins"
import Paragraph from "../../Text/Paragraph"
import FontSizes from "../../../enums/FontSizes"
import { Variant, motion } from "framer-motion"
import { rotateShow } from "../../../AnimationSets/animation"

interface IProps {
  benefits: IBenefits,
  animSet: Variant
} 

const BenefitCards :FC<IProps> = ({benefits}) => {
  return (
    <StyledContainer variants={rotateShow}>
        <img src={benefits.img} alt={benefits.title} loading="lazy"/>
        <Paragraph fontSize={FontSizes.smallHeading} fontWeight={700}>{benefits.title}</Paragraph>
        <Paragraph>{benefits.description}</Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled(motion.div)`
    ${flexCenter}
    flex-direction: column;
    width: 32.5rem;
    gap: 2.5rem;
    &> p {
        text-align: center;
    }
    
`
export default BenefitCards