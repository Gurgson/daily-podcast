import Section from '../Section/Section'
import { StyledParagraph } from '../../Text/Paragraph'
import styled from 'styled-components'
import { flexCenter } from '../../../styles/mixins'
import FontSizes from '../../../enums/FontSizes'
import ColorScheme from '../../../enums/ColorScheme'
import HostCard from '../../Cards/HostCard/HostCard'
import { marquesHost, poterHost } from '../../../Data/Hosts'
import Decoration from '../../Decoration/Decoration'
import Headline from '../../Headline.tsx/Headline'
import AnimatedText from '../../AnimatedText/AnimatedText'

const AboutAboutSection = () => {
  return (
    <Section scribbleTopOff={true}>
      <StyledHeader>
        <Headline main='What our listeners say' sub="Their experience throughout every platform"/>
      </StyledHeader>

      <StyledImg src="/images/about.png" alt="About section image"/>

      <StyledTitle margin='8rem  auto' fontWeight={700} fontSize={FontSizes.subheading} wordSpacing='-1px'>
        <AnimatedText stagger={0.1}>
        About and History  
        </AnimatedText>  
      </StyledTitle>    
      <HistorySection>
        
        <TextContainer>
          <CustomParagraph>
            Eu non <span>diam </span>phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam  <span>elementum pulvinar</span>.
          </CustomParagraph>
          <CustomParagraph>
            Elementum eu facilisis sed odio morbi quis commodo.
            Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
          </CustomParagraph>
        </TextContainer>
        <TextContainer>
          <CustomParagraph>
          Lorem ipsum dolor sit amet,  <span> consectetur adipiscing </span> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <span>Amet</span> interdum imperdiet laoreet <span>morbi</span> tincidunt fermentum, libero. Ante enim eget. 
          </CustomParagraph>
          <CustomParagraph>Viverra at porttitor accumsan <a href='https://www.lipsum.com/feed/html'>Orci non here  </a> </CustomParagraph>
        </TextContainer>
        <hr/>
      </HistorySection>
      <StyledTitle2 margin='8rem  auto' fontWeight={700} fontSize={FontSizes.subheading} wordSpacing='-1px'> 
          <AnimatedText stagger={0.1}>
            Founder and Main Host 
          </AnimatedText>
       </StyledTitle2>    
      <StyledHostsContainer>
        <HostCard animateDirection={false} number={1} host={marquesHost} decoration={<Decoration visableWhenWidthOver={520} href='/images/Benefits/face1.svg' rotate={30} horizontal={55} vertical={0}/>}/>
        <HostCard animateDirection={true} number={2} host={poterHost} decoration={<Decoration visableWhenWidthOver={520} href='/images/Benefits/star.svg' horizontal={60} vertical={0}/> }/>
      </StyledHostsContainer>
    </Section>
  )
}

const StyledHostsContainer = styled.article`
  ${flexCenter}
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 100vw;
  overflow: none;
`
const StyledTitle2 = styled(StyledParagraph)`
  margin-bottom: 8rem;
  text-align: center;
  width: 70%;
  &::after {
    
    content: "";
    position:absolute;
    right: -6.5rem;
    top: -6rem;
    width: 10rem;
    height: 10rem;
    background-image: url("/decorations/Scribble_blue.svg");
    background-size: contain;
    z-index: 100;
  }
`
const CustomParagraph = styled(StyledParagraph)`
  text-align: justify;
  line-height: 160%;
  & > span {
    font-weight: 700;
  }
  & > a {
    text-decoration: underline;
    color: var(${ColorScheme.grey});
   
  }
`
const TextContainer = styled.section`
  width: 30vw;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    width: 75vw;
  }
`
const StyledTitle = styled(StyledParagraph)`
  margin-bottom: 8rem;
  text-align: center;
  &::after {
    content: "";
    position:absolute;
    left: -6.5rem;
    top: -6rem;
    width: 10rem;
    height: 10rem;
    background-image: url("/decorations/Sparkle.svg");
    background-size: contain;
    transform: scaleX(-1);
    z-index: 100;
  }
`
const HistorySection = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  & hr {
    width: 100%;
    border-top: 1px solid var(${ColorScheme.grey});
  }
  @media screen and (max-width: 1124px) {
    justify-content: center;
  }
`
const StyledImg = styled.img`
  width:80%;
`
const StyledHeader = styled.div`
  margin: 10rem auto 5rem auto;
  ${flexCenter}
  flex-direction: column;
`
export default AboutAboutSection