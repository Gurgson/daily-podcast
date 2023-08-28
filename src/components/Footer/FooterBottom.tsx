import styled from "styled-components"
import Logo from "../Logo/Logo"
import {FC} from "react"
import SocialMediaIcon from "../Icons/SocialMediaIcon"
import { SiAppstore, SiGoogleplay, SiInstagram, SiTiktok, SiTwitter } from "react-icons/si"
import SponsorsCard from "../Cards/SponsorsCard/SponsorsCard"
import ColorScheme from "../../enums/ColorScheme"
import { HashLink } from "react-router-hash-link"
import FontSizes from "../../enums/FontSizes"

const FooterBottom : FC = () => {
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
          <SocialMediaIcon href="https://twitter.com/" icon={<SiTwitter/>} color={ColorScheme.red}/>
          <SocialMediaIcon href="https://instagram.com/" icon={<SiInstagram/>} color={ColorScheme.black}/>
          <SocialMediaIcon href="https://tiktok.com/" icon={<SiTiktok/>} color={ColorScheme.black}/>
        </StyledRow>
      </StyledFooterSection>
        
      <LinkContainer>
        <StyledLink smooth to="/About">About</StyledLink>
        <StyledLink className="link-colored" smooth to="/Home#Testimonials">Testimonials</StyledLink>
        <StyledLink smooth to="/Home#Features">Features</StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink className="link-colored" smooth to="/Home#Episodes">Episodes</StyledLink>
        <StyledLink smooth to="/#">Pricing</StyledLink>
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
          <SocialMediaIcon icon={<SiAppstore/>} color={ColorScheme.black} href="https://www.apple.com/app-store/" />
          <SocialMediaIcon icon={<SiGoogleplay/>} color={ColorScheme.black} href="https://www.apple.com/app-store/" />
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
  border-top: 1px solid var(${ColorScheme.grey});

  
`

const StyledLink = styled(HashLink)`
  color: var(${ColorScheme.black});
  font-size: var(${FontSizes.body});
  text-decoration: none;
  display: block;
  &.link-colored {
    color: var(${ColorScheme.red})
  }
`
const StyledText = styled.span`
  color: var(${ColorScheme.grey});
  line-height: 160%;
  font-size: var(${FontSizes.caption});
  text-align: none;
  & > a {
    color: var(${ColorScheme.red});
    text-decoration: none;
  }
`
const StyledFooterSection = styled.div`
  flex: 25%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-evenly;
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
  justify-content: center;
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
  color: var(${ColorScheme.grey});
}`
export default FooterBottom