import styled from "styled-components"
import Section from "../Section/Section"
import { flexCenter } from "../../../styles/mixins"
import Paragraph from "../../Text/Paragraph"
import Ilustration from "./Ilustration"
import Quote from "../../Quote/Quote"
import FontSizes from "../../../enums/FontSizes"

const LandingAboutSection = () => {
  return (
    <Section>
        <StyledContainer>
            <StyledPs>
                <Paragraph margin="0 0.5rem" fontSize={FontSizes.heading} fontWeight={700} lineHeight="120%">Talk. Listen. Get inspired.</Paragraph>
                <Paragraph margin="0 rem" fontSize={FontSizes.heading} fontWeight={700} lineHeight="120%"> by every minute of it.</Paragraph>
            </StyledPs>
            <StyledRow>
                <Ilustration imgUrl="images/ilustration01.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
                <Ilustration imgUrl="images/ilustration02.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
            </StyledRow>
            <Quote author={{platform: "/icons/spotify_scm_full.png",authorName:"John Smith", profilePicture:"/images/Testimonials/john.png"}} >One of the best daily podcasts that covers every topic on Spotify.</Quote>
        </StyledContainer>
    </Section>
  )
}
const StyledPs = styled.div`
    text-align: center;
`
const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    

`
const StyledContainer = styled.div`
    ${flexCenter}
    flex-direction: column;
    overflow: hidden;
`
export default LandingAboutSection