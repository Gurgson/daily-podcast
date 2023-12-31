import { FC } from 'react'
import { ITestimonials } from '../../../Data/Testimonials'
import styled from 'styled-components'
import QuoteSign from '../../Quote/QuoteSign'
import { StyledParagraph } from '../../Text/Paragraph'
import QuoteAuthor from '../../Quote/QuoteAuthor'
import FontSizes from '../../../enums/FontSizes'
import ColorScheme from '../../../enums/ColorScheme'

interface IProps {
  testimonial: ITestimonials
}

const TestimonialCard : FC<IProps> = (props) => {
  return(
    <StyledContainer >
      <QuoteSign/>
      <StyledText fontSize={FontSizes.smallHeading}> {props.testimonial.description}</StyledText>
      <QuoteAuthor author={props.testimonial.author}/>
    </StyledContainer>
    

  )
}
const StyledContainer = styled.div`
  min-height: 37rem;
  min-width: 57rem;
 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  padding: 6rem;
  background-color: var(${ColorScheme.white});
  border-radius: 8px;
  gap: 1rem;
   @media screen and (max-width:700px) {
    min-width: 65%
  }
`
const StyledText = styled(StyledParagraph)`
  text-align: justify;
  
`
export default TestimonialCard