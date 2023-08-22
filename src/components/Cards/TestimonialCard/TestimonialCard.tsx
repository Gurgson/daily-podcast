import { FC } from 'react'
import { ITestimonials } from '../../../Data/Testimonials'
import styled from 'styled-components'
import QuoteSign from '../../Quote/QuoteSign'
import { StyledParagraph } from '../../Text/Paragraph'
import QuoteAuthor from '../../Quote/QuoteAuthor'

interface IProps {
  testimonial: ITestimonials
}

const TestimonialCard : FC<IProps> = (props) => {
  return(
    <StyledContainer >
      <QuoteSign/>
      <StyledText fontSize="--fs-smallHeading" > {props.testimonial.description}</StyledText>
      <QuoteAuthor author={props.testimonial.author}/>
    </StyledContainer>
    

  )
}
const StyledContainer = styled.div`
  min-height: 37rem;
  min-width: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 6rem;
  background-color: var(--color-white);
  border-radius: 8px;
`
const StyledText = styled(StyledParagraph)`
  text-align: justify;
  
`
export default TestimonialCard