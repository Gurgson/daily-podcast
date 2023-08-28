import { IResult, ResultData } from '../Data/Results'
import Button from '../components/Button/Button'
import { ButtonSize, ButtonType } from '../components/Button/IButton'
import ResultCards from '../components/Cards/ResultCards/ResultCards'
import Header from '../components/Header/Header'
import AboutAboutSection from '../components/Sections/AboutAbout/AboutAboutSection'
import Paragraph, { StyledParagraph } from '../components/Text/Paragraph'
import styled from 'styled-components'
import FontSizes from '../enums/FontSizes'
import ColorScheme from '../enums/ColorScheme'
import SponsorSection from '../components/Sections/SponsorSection/SponsorSection'

const About = () => {
  
  return (
    <>
      <Header>
        <Paragraph fontSize={FontSizes.displayHeading} fontWeight={700}>About</Paragraph>
        <Paragraph fontSize={FontSizes.displayHeading} color={ColorScheme.red} fontWeight={700}>Pod of Cast</Paragraph>
        <StyledText lineHeight='160%' color={ColorScheme.grey} >Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.t</StyledText>
        <StyledButtons>
          <Button type={ButtonType.Outlined} size={ButtonSize.big}>  Become sponsor</Button>
          <Button type={ButtonType.Fill} size={ButtonSize.big}> Subscribe</Button>
        </StyledButtons>
        <StyledResults>
        {
          ResultData.map((item:IResult)=><ResultCards result={item} key={`${item.countInThausands}k of ${item.subject}`}/>)
        }
      </StyledResults>
      </Header>
      <AboutAboutSection/>
      <SponsorSection/>
    </>
  )
}
const StyledResults = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 6rem;
  @media screen and (min-width: 1200px)
  {
    margin: 0;
    position: absolute;
    bottom: -12.5%;
    left: 10%;
  }
  



`
const StyledButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin: 6rem auto 12rem auto;
`;
const StyledText = styled(StyledParagraph)`
  margin: 6rem auto;
  width: 40%;
  text-align: center;
`;

export default About