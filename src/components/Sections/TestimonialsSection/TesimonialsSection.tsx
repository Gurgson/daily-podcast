import { FC } from 'react'
import Section from '../Section/Section'    
import Caurusel from '../../Slider/Carausel/Caurusel'
import Testimonials from '../../../Data/Testimonials'
import TestimonialCard from '../../Cards/TestimonialCard/TestimonialCard'
import styled from 'styled-components'
import ColorScheme from '../../../enums/ColorScheme'
import Headline from '../../Headline.tsx/Headline'
const TesimonialsSection:FC = () => {
  return (
    <StyledContainer id='Testimonials' bgcolor={ColorScheme.lightBlue}>
      <Headline main="What our listeners say" sub='Become our sponsor and get all benefits'/>
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