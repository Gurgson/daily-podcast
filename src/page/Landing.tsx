
import styled from "styled-components"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import { ButtonSize, ButtonType } from "../components/Button/IButton"
import Paragraph from "../components/Text/Paragraph"
import { CoversCardsList, ICover } from "../Data/Covers"
import CoverCard from "../components/Cards/CoverCard/CoverCard"
import Caurusel from "../components/Slider/Carausel/Caurusel"
import SponsorsCard from "../components/Cards/SponsorsCard/SponsorsCard"
import Footer from "../components/Footer/Footer"

const Landing = () => {
  return (
    <> 
      <Header>
        <StyledTextContainer>
          <Paragraph fontSize={"--fs-displayHeading"} fontWeight={700}> Your daily</Paragraph>
          <Paragraph fontSize="--fs-displayHeading" color="--color-red" fontWeight={700}> Podcast</Paragraph>
          <StyledDescriptionTextContainer>
            <Paragraph > We cover all kinds of categories and </Paragraph>
            <Paragraph>a weekly special guest.</Paragraph> 
          </StyledDescriptionTextContainer>
          
        </StyledTextContainer>  
        <Button type={ButtonType.Fill} size={ButtonSize.big}>Subscribe</Button>
        <Caurusel>
        {
            CoversCardsList.map((item : ICover, index)=><CoverCard youtube={item.youtube} gpodcast={item.gpodcast} spotify={item.spotify} imgUrl={item.imgUrl} title={item.title} key={`${item.title}-cover-card-${index}`}/>)
        }
        </Caurusel>
        <StyledSponsorBar>
          <Paragraph fontSize="--fs-smallHeading" fontWeight={700}>Supported by:</Paragraph>
          <SponsorsCard/>
        </StyledSponsorBar>
      </Header>
    </>
     

    
  )
}
const StyledSponsorBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  width: 80%;
  padding: 4rem 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  margin: 2rem;
  & > p {
    line-height: 140%;
    letter-spacing: -0.4px;
  }
  
`
const StyledDescriptionTextContainer = styled.div`
  margin-bottom: 4rem;
  & > p {
    line-height: 160%;
  }
`

const StyledTextContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;

`


export default Landing