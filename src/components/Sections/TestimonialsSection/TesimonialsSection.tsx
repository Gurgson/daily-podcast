import { FC } from 'react'
import Section from '../Section/Section'    
import Caurusel from '../../Slider/Carausel/Caurusel'
import Testimonials from '../../../Data/Testimonials'
import TestimonialCard from '../../Cards/TestimonialCard/TestimonialCard'
import styled from 'styled-components'
import Paragraph from '../../Text/Paragraph'
const TesimonialsSection:FC = () => {
  return (
    <StyledContainer bgcolor='--color-blue-light'>
      <Paragraph fontSize='--fs-heading' fontWeight={700}>What our listeners say</Paragraph>
      <Paragraph fontSize='--fs-smallHeading' color='--color-grey'>Their experience throughout every platform</Paragraph>
      <Caurusel>
        {Testimonials.map((item,index) => <TestimonialCard description={item.description} author={item.author} authorImg={item.authorImg} platform={item.platform} key={`testimonial-card-${index}` }/>)}
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