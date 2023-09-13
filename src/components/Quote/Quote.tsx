import { FC } from "react"
import styled from "styled-components"
import QuoteSign from "./QuoteSign"
import QuoteAuthor from "./QuoteAuthor"
import { Author } from "../../Data/Testimonials"
import ColorScheme from "../../enums/ColorScheme"
import FontSizes from "../../enums/FontSizes"
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 110rem;
  width: 100%;
  padding: 2rem 0 ;
  background-color: var(${ColorScheme.lightRed});
  position: relative;
  gap: 3rem;
  & > p {
    width: 80%;
    font-size: var(${FontSizes.subheading}); 
    text-align: center;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.07rem;
  }
  &::before{
    content: "";
    position: absolute;
    display: block;
    width: 125px;
    height: 125px;
    bottom: 20%;
    left: -60px;
    background-image: url("/decorations/Spiral.svg");
    background-repeat: no-repeat;
    @media screen and (max-width:500px){
      display: none;
      
    }
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