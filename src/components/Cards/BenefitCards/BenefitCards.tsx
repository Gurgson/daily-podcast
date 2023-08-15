import { FC } from "react"
import { IBenefits } from "../../../Data/Benefits"
import styled from "styled-components"
import { flexCenter } from "../../../styles/mixins"
import Paragraph from "../../Text/Paragraph"

const BenefitCards :FC<IBenefits> = (props) => {
  return (
    <StyledContainer>
        <img src={props.img} alt={props.title} loading="lazy"/>
        <Paragraph fontSize="--fs-smallHeading" fontWeight={700}>{props.title}</Paragraph>
        <Paragraph>{props.description}</Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
    ${flexCenter}
    flex-direction: column;
    width: 32.5rem;
    gap: 2.5rem;
    &> p {
        text-align: center;
    }
    
`
export default BenefitCards