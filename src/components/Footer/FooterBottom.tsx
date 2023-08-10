import styled from "styled-components"
import Logo from "../Logo/Logo"
// import Paragraph from "../Text/Paragraph"
import SocialMediaIcon from "../Icons/SocialMediaIcon"
import { SiAppstore, SiGoogleplay, SiInstagram, SiTiktok, SiTwitter } from "react-icons/si"
import SponsorsCard from "../Cards/SponsorsCard/SponsorsCard"
const FooterBottom = () => {
  return (
    <StyledContainer>
      <StyledFooterSection>
        <StyledRow>
          <Logo/>
          <StyledText>
            &copy;2023
          </StyledText>
        </StyledRow>
        <StyledText>
        Lorem ipsum dolor sit amet, <br/>
        consectetur adipiscing elit.
        </StyledText>
        
        <StyledRow>
          <SocialMediaIcon href="https://twitter.com/" icon={<SiTwitter/>} color="--color-red"/>
          <SocialMediaIcon href="https://instagram.com/" icon={<SiInstagram/>} color="--color-black"/>
          <SocialMediaIcon href="https://tiktok.com/" icon={<SiTiktok/>} color="--color-black"/>
        </StyledRow>
      </StyledFooterSection>
        
      <LinkContainer>
        <StyledLink href="/About">About</StyledLink>
        <StyledLink href="/#" isColored={true}>Testimonials</StyledLink>
        <StyledLink href="/#">Features</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink href="/About" isColored={true}>Episodes</StyledLink>
        <StyledLink href="/#">Pricing</StyledLink>
        {/* <StyledLink href="/#">Features</StyledLink> */}
      </LinkContainer>
      <StyledFooterSection>
        <>
          <StyledText>Listen our episodes on your fav platform:</StyledText>
          <SponsorsCard isSmall={true}/>
        </>
        <>
        <StyledText>App aviable on:</StyledText>
        <StyledRow>
          <SocialMediaIcon icon={<SiAppstore/>} color="--color-black" href="https://www.apple.com/app-store/" />
          <SocialMediaIcon icon={<SiGoogleplay/>} color="--color-black" href="https://www.apple.com/app-store/" />
        </StyledRow>
        </>
      </StyledFooterSection>
      <StyledBottom>
        <StyledText>©2022. All Rights Reserved. <a href="/">Pod of Cast</a> </StyledText>
        <StyledTextPrivacyAndTerms><a href="/Terms">Terms</a> &middot; <a href="/Privacy">Privacy</a> </StyledTextPrivacyAndTerms>
      </StyledBottom>
    </StyledContainer>
  )
}

const StyledBottom  = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  flex: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-grey);

  
`
const StyledLink = styled.a<{isColored?: boolean}>`
  color: var(${p=>(p.isColored)?"--color-red":"--color-black"});
  font-size: var(--fs-body);
  text-decoration: none;
  display: block;
`
const StyledText = styled.span`
  color: var(--color-grey);
  line-height: 160%;
  font-size: var(--fs-caption);
  text-align: none;
  & > a {
    color: var(--color-red);
    text-decoration: none;
  }
`
const StyledFooterSection = styled.div`
  flex: 25%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-around;
`
const StyledRow = styled.div`
  display: flex;
  align-items: end;
  gap: 3.5rem;
`
const StyledContainer = styled.div`
  padding: 14rem;
  padding-bottom: 8rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const LinkContainer = styled(StyledFooterSection)`
  align-items: start;
  gap:2rem;
  justify-content: start;
  flex: 20%;
`
const StyledTextPrivacyAndTerms = styled(StyledText)`
& > a {
  color: var(--color-grey);
}`
export default FooterBottom