import Section from '../Section/Section'
import styled from 'styled-components'
import Benefits from '../../../Data/Benefits'
import BenefitCards from '../../Cards/BenefitCards/BenefitCards'
import { flexCenter } from '../../../styles/mixins'
import Headline from '../../Headline.tsx/Headline'



const FeaturesSection = () => {
  return (
    <Section id='Features'> 
        <StyledHeader>
            <Headline main='Membership'/>
        </StyledHeader>
        <Headline sub="Their experience throughout every platform"/>
        <CardContainer>
            {Benefits.map((item,index)=> <BenefitCards benefits={item}  key={`featureCard-${index}`}/>)}
        </CardContainer>
    </Section>
  )
}
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 14rem;
    gap: 8rem 2rem;
    ${flexCenter}
`
const StyledHeader = styled.div`
    position: relative;
    &::after{
        content: "";
        background-image: url("/decorations/Scribble_black.svg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 24rem;
        height: 24rem;
        position: absolute;
        top: -16rem;
        right: -12rem;
    }
`
export default FeaturesSection