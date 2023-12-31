
import styled from "styled-components"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import { ButtonSize, ButtonType } from "../components/Button/IButton"
import Paragraph from "../components/Text/Paragraph"
import { EpisodesDataList, IEpisode } from "../Data/Episodes"
import EpisodeCard from "../components/Cards/EpisodeCard/EpisodeCard"
import SponsorsCard from "../components/Cards/SponsorsCard/SponsorsCard"
import LandingAboutSection from "../components/Sections/LandingAboutSection/LandingAboutSection"
import FeaturesSection from "../components/Sections/FeaturesSection/FeaturesSection"
import TesimonialsSection from "../components/Sections/TestimonialsSection/TesimonialsSection"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import EpisodeListSection from "../components/Sections/EpisodeListSection/EpisodeListSection"
import FontSizes from "../enums/FontSizes"
import ColorScheme from "../enums/ColorScheme"
import Page from "../components/Page/Page"
import { HashLink } from "react-router-hash-link"
import AnimatedText from "../components/AnimatedText/AnimatedText"

const Landing = () => {
  const [CauruselWidth, setCauruselWidth] = useState<number>(0);
  const CauruselRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      if(CauruselRef.current)
        setCauruselWidth(CauruselRef.current.scrollWidth - CauruselRef.current.offsetWidth);
    },[])
  
  const cauruselItems = EpisodesDataList.filter((item:IEpisode)=>item.isFeatured === true).map((item : IEpisode, index)=><EpisodeCard applyTitle={true} cover={item} key={`${item.shortTitle}-cover-card-${index}`}/>);
  return (
    <Page props={{documentTitle: "Pod of cast, your daily podcast"}}> 
      <Header>
        <StyledTextContainer>
          <Paragraph fontSize={FontSizes.displayHeading} fontWeight={700}>
            <AnimatedText>About</AnimatedText>
          </Paragraph>
          <Paragraph fontSize={FontSizes.displayHeading} color={ColorScheme.red} fontWeight={700}> 
            <AnimatedText delay={1}>Podcast</AnimatedText>
          </Paragraph>
          <StyledDescriptionTextContainer>
            <Paragraph > 
              We cover all kinds of categories and
            </Paragraph>
            <Paragraph>a weekly special guest.</Paragraph> 
          </StyledDescriptionTextContainer>
          
        </StyledTextContainer>  
        <HashLink smooth to="/Home#Features">
          <Button type={ButtonType.Fill} size={ButtonSize.big}>Subscribe</Button>
        </HashLink>
        <CauruselContainer ref={CauruselRef}>
          <StyledDraggableCaurusel initial={{translateX:300}} animate={{translateX: 0,transition:{duration: 2}}} drag="x" dragConstraints={{right:60 , left:-CauruselWidth+260}} whileDrag={{cursor: "grabbing", scale: 0.95}} whileHover={{cursor:"grab"}}>
            {
              cauruselItems
            }
          </StyledDraggableCaurusel>
        </CauruselContainer>
        

        <StyledSponsorBar>
          <Paragraph fontSize={FontSizes.smallHeading} fontWeight={700}>Supported by:</Paragraph>
          <SponsorsCard/>
        </StyledSponsorBar>
      </Header>
      <LandingAboutSection/>
      <TesimonialsSection/>
      <FeaturesSection/>
      <EpisodeListSection/>
    </Page>
     

    
  )
}
const StyledDraggableCaurusel = styled(motion.div)`
  display: flex;
  gap: 2rem;
  
`
const CauruselContainer = styled(motion.div)`
  margin: 6rem 0;
  overflow: hidden;
  width: 100%;
`
const StyledSponsorBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  width: 80%;
  padding: 4rem 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  gap: 3rem;
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