import { FC } from "react"
import styled from "styled-components"
import { flexCenter } from "../../styles/mixins"
import QuoteSign from "./QuoteSign"
import QuoteAuthor from "./QuoteAuthor"
import { Author } from "../../Data/Testimonials"
interface IProps  {
  children: string,
  author: Author
}

const Quote:FC<IProps> = (props) => {
  return (
    
    <StyledContainer>
      <QuoteSign/>
      <p>
      {props.children}
      </p>
      <QuoteAuthor author={props.author}/>

    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 90%;
  padding: 4rem;
  margin: 1rem auto;
  background-color: var(--color-red-light);
  position: relative;
  gap: 3rem;
  & >p {
    width: 60%;
    font-size: var(--fs-subheading);
    text-align: center;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 51.31px */
    letter-spacing: -0.07rem;
  }
  &::before{
    content: "";
    position: absolute;
    width: 125px;
    height: 125px;
    bottom: 20%;
    left: -60px;
    background-image: url("/decorations/Spiral.svg");
    background-repeat: no-repeat;
  }
  &::after{
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    top: -50px;
    right: -100px;
    background-image: url("/decorations/star_black.svg");
    background-repeat: no-repeat;
    z-index: 10;
  }
  
  
`
export default Quote