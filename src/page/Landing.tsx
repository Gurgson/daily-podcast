
import styled from "styled-components"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import { ButtonSize, ButtonType } from "../components/Button/IButton"
import Paragraph from "../components/Text/Paragraph"
import { EpisodesDataList, IEpisodes } from "../Data/Episodes"
import EpisodeCard from "../components/Cards/CoverCard/CoverCard"
import SponsorsCard from "../components/Cards/SponsorsCard/SponsorsCard"
import LandingAboutSection from "../components/Sections/LandingAboutSection/LandingAboutSection"
import FeaturesSection from "../components/Sections/FeaturesSection/FeaturesSection"
import TesimonialsSection from "../components/Sections/TestimonialsSection/TesimonialsSection"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import EpisodeListSection from "../components/Sections/EpisodeListSection/EpisodeListSection"

const Landing = () => {
  const [CauruselWidth, setCauruselWidth] = useState<number>(0);
  const CauruselRow = useRef<HTMLDivElement>(null);

    useEffect(()=>{
      if(CauruselRow.current)
        setCauruselWidth(CauruselRow.current.scrollWidth - CauruselRow.current.offsetWidth);
    },[])
  
  const cauruselItems = EpisodesDataList.filter((item:IEpisodes)=>item.isFeatured === true).map((item : IEpisodes, index)=><EpisodeCard applyTitle={true} cover={item} key={`${item.shortTitle}-cover-card-${index}`}/>);
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
        <CauruselContainer>
          <StyledDraggableCaurusel drag="x" dragConstraints={{right:0, left:-CauruselWidth}} whileDrag={{cursor: "grabbing", scale: 0.95}} whileHover={{cursor:"grab"}}>
            {
              cauruselItems
            }
          </StyledDraggableCaurusel>
        </CauruselContainer>
        

        <StyledSponsorBar>
          <Paragraph fontSize="--fs-smallHeading" fontWeight={700}>Supported by:</Paragraph>
          <SponsorsCard/>
        </StyledSponsorBar>
      </Header>
      <LandingAboutSection/>
      <TesimonialsSection/>
      <FeaturesSection/>
      <EpisodeListSection/>
    </>
     

    
  )
}
const StyledDraggableCaurusel = styled(motion.div)`
  display: flex;
  gap: 2rem;
  
`
const CauruselContainer = styled.div`
  margin: 6rem 0;
  overflow: hidden;
  width: 100%;
`
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