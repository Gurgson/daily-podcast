import { FC } from 'react'
import { ITestimonials } from '../../../Data/Testimonials'
import styled from 'styled-components'
import QuoteSign from '../../Quote/QuoteSign'
import { StyledParagraph } from '../../Text/Paragraph'
import QuoteAuthor from '../../Quote/QuoteAuthor'
const TestimonialCard : FC<ITestimonials> = (props) => {
  return(
    <StyledContainer >
      <QuoteSign/>
      <StyledText fontSize="--fs-smallHeading" > {props.description}</StyledText>
      <QuoteAuthor avatar={props.authorImg} authorName={props.author} platform={props.platform}/>
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