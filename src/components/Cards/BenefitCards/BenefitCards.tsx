import { FC } from "react"
import { IBenefits } from "../../../Data/Benefits"
import styled from "styled-components"
import { flexCenter } from "../../../styles/mixins"
import Paragraph from "../../Text/Paragraph"
import FontSizes from "../../../enums/FontSizes"
import { motion } from "framer-motion"

interface IProps {
  benefits: IBenefits
}

const BenefitCards :FC<IProps> = (props) => {
  return (
    <StyledContainer>
        <img src={props.benefits.img} alt={props.benefits.title} loading="lazy"/>
        <Paragraph fontSize={FontSizes.smallHeading} fontWeight={700}>{props.benefits.title}</Paragraph>
        <Paragraph>{props.benefits.description}</Paragraph>
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