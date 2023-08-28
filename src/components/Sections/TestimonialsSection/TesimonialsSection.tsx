import { FC } from 'react'
import Section from '../Section/Section'    
import Caurusel from '../../Slider/Carausel/Caurusel'
import Testimonials from '../../../Data/Testimonials'
import TestimonialCard from '../../Cards/TestimonialCard/TestimonialCard'
import styled from 'styled-components'
import Paragraph from '../../Text/Paragraph'
import FontSizes from '../../../enums/FontSizes'
import ColorScheme from '../../../enums/ColorScheme'
const TesimonialsSection:FC = () => {
  return (
    <StyledContainer id='Testimonials' bgcolor={ColorScheme.lightBlue}>
      <Paragraph fontSize={FontSizes.heading} lineHeight='12 0%' fontWeight={700}>What our listeners say</Paragraph>
      <Paragraph fontSize={FontSizes.smallHeading} lineHeight='160%' color={ColorScheme.grey}>Become our sponsor and get all benefits</Paragraph>
      <Caurusel>
        {Testimonials.map((item,index) => <TestimonialCard testimonial={item}  key={`testimonial-card-${index}` }/>)}
      </Caurusel>
    </StyledContainer>
  )
}
const StyledContainer = styled(Section)`
  overflow: hidden;
  & p {
    line-height: 160%;
  }
`
export default TesimonialsSection