import  { FC } from 'react'
import Section from '../Section/Section'
import ColorScheme from '../../../enums/ColorScheme'
import Caurusel from '../../Slider/Carausel/Caurusel'
import sponsorsData, { ISponsor } from '../../../Data/Sponsors'
import SponsorCard from '../../Cards/SponsorCard'
import Paragraph, { StyledParagraph } from '../../Text/Paragraph'
import styled from 'styled-components'
import FontSizes from '../../../enums/FontSizes'

const SponsorSection :FC= () => {
  return (
    <Section bgcolor={ColorScheme.lightRed}>
        <StyledTitle lineHeight='160%' fontSize={FontSizes.heading} fontWeight={700}>Our Sponsor</StyledTitle>
        <Paragraph fontSize={FontSizes.smallHeading} lineHeight='160%' color={ColorScheme.grey}> Our current official sponsor</Paragraph>
        <Caurusel>
            {sponsorsData.map((item:ISponsor,index)=><SponsorCard sponsorImg={item.sponsorImg} desription={item.desription} key={`Sponsor card -${index}`}/>)}
        </Caurusel>
    </Section>
  )
}
const StyledTitle = styled(StyledParagraph)`
    &::after{
        content: "";
        display: block;
        height: 7.5rem;
        width: 7.5rem;
        background-image: url("/decorations/Sparkle_fireworks.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        left: -7.5rem;
        top: -25%;
    }
`
export default SponsorSection