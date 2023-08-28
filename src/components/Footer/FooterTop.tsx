import styled from "styled-components"
import Button from "../Button/Button"
import { ButtonSize, ButtonType } from "../Button/IButton"
import Paragraph from "../Text/Paragraph"
import Decoration from "../Decoration/Decoration"
import { DecorationHorizontalPosition } from "../Decoration/IDecoration"
import SocialMediaIcon from "../Icons/SocialMediaIcon"
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si"
import ColorScheme from "../../enums/ColorScheme"
import FontSizes from "../../enums/FontSizes"
const FooterTop = () => {
  return (
    <StyledContainer>
        <StyledTopHeader>
          <Button type={ButtonType.Outlined} size={ButtonSize.small} textColor={ColorScheme.red} borderColor={ColorScheme.lightRed}>Beta</Button>
          <Paragraph lineHeight="120%" fontSize={FontSizes.heading} fontWeight={700} wordSpacing="-1px">Avalaible now </Paragraph>
          <Paragraph lineHeight="120%" fontSize={FontSizes.heading} fontWeight={700} wordSpacing="-1px">Pod Of Casts App </Paragraph>
          <Paragraph fontSize={FontSizes.smallHeading} color={ColorScheme.grey} lineHeight="160%"> We just launched out podcast </Paragraph>
        </StyledTopHeader>
        <StyledBottomHeader>
          <StyledRelativDiv>
          <Decoration vertical={-100} horizontal={80} z={10} href="/decorations/Sparkle.svg"/>
            <Button type={ButtonType.Fill} size={ButtonSize.big}>Download now</Button>
            
          
          </StyledRelativDiv>
          <Paragraph margin="1.4rem" fontSize={FontSizes.caption}> Content also available on:</Paragraph>
          <StyledIconsContainer>
            <SocialMediaIcon icon={<SiGooglepodcasts/>} href="https://podcasts.google.com/" color={ColorScheme.black}/>
            <SocialMediaIcon icon={<SiSpotify/>} href="https://open.spotify.com/genre/podcasts-web" color={ColorScheme.black}/>
            <SocialMediaIcon icon={<SiYoutube/>} href="https://youtube.com/" color={ColorScheme.black}/>
          </StyledIconsContainer>
        </StyledBottomHeader>
        <Decoration href="/images/Footer/left.png" vertical={50}  horizontal={DecorationHorizontalPosition.left} />
        <Decoration href="/images/Footer/right.png" vertical={25}  horizontal={75} />
    </StyledContainer>
  )
}

export default FooterTop
const StyledRelativDiv = styled.div`
  
  position: relative;
`
const StyledIconsContainer = styled.div`
  display: flex;
  gap: 2rem;
`
const StyledTopHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10rem;
  z-index: 10;
  flex-direction: column;
`
const StyledBottomHeader = styled.div`
  display: flex;
  align-items: center;
  /* overflow: hidden;  */
   z-index: 10;
  flex-direction: column;
`
const StyledContainer = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: var(${ColorScheme.lightBlue});
    border-bottom: 1px solid var(${ColorScheme.grey});

    padding:10rem 0 14rem 0;
    & > p:first-child{
        margin: 2.3rem;

    }
    & > p:nth-last-child(){
        margin-top: 2.8rem;
    }
    
`