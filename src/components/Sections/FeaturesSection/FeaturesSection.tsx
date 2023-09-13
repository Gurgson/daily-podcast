import Section from '../Section/Section'
import styled from 'styled-components'
import Benefits from '../../../Data/Benefits'
import BenefitCards from '../../Cards/BenefitCards/BenefitCards'
import { flexCenter } from '../../../styles/mixins'
import Headline from '../../Headline.tsx/Headline'
import { motion } from 'framer-motion'



const FeaturesSection = () => {
    
    return (
    <Section id='Features'> 
        <StyledHeader>
            <Headline main='Membership'/>
            <Headline sub="Their experience throughout every platform"/>
        </StyledHeader>
        
        <CardContainer>
            {Benefits.map((item,index)=> <BenefitCards  benefits={item}  key={`featureCard-${index}`}/>)}
        </CardContainer>
    </Section>
  )
}
const CardContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8rem 2rem;
    margin: 6rem 0;
    width: 80%;
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
        @media screen  and (max-width: 500px){
            display: none;
        }
    }
`
export default FeaturesSection