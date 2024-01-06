import styled from "styled-components"
import Section from "../Section/Section"
import { flexCenter } from "../../../styles/mixins"
import Ilustration from "./Ilustration"
import Quote from "../../Quote/Quote"
import Headline from "../../Headline.tsx/Headline"

const LandingAboutSection = () => {
  return (
    <Section>
        <StyledContainer>
            <StyledPs>
                <Headline main="Talk. Listen. Get inspired."/>
                <Headline main="by every minute of it."/>

            </StyledPs>
            <StyledRow>
                <Ilustration direction={true}  imgUrl="images/ilustration01.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
                <Ilustration direction={false} imgUrl="images/ilustration02.svg" quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "/>
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