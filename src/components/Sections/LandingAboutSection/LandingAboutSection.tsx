import styled from "styled-components"
import Section from "../Section/Section"
import { flexCenter } from "../../../styles/mixins"
import Paragraph from "../../Text/Paragraph"
import Ilustration from "./Ilustration"
import Quote from "../../Quote/Quote"

const LandingAboutSection = () => {
  return (
    <Section>
        <StyledContainer>
            <>
            <Paragraph fontSize="--fs-heading" fontWeight={700} lineHeight="120%">Talk. Listen. Get inspired.</Paragraph>
            <Paragraph fontSize="--fs-heading" fontWeight={700} lineHeight="120%"> by every minute of it.</Paragraph>
            </>
            <StyledRow>
                <Ilustration imgUrl="images/ilustration01.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
                <Ilustration imgUrl="images/ilustration02.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
            </StyledRow>
            <Quote>One of the best daily podcasts that covers every topic on Spotify.</Quote>
        </StyledContainer>
    </Section>
  )
}

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

`
const StyledContainer = styled.div`
    ${flexCenter}
    flex-direction: column;
    
`
export default LandingAboutSection