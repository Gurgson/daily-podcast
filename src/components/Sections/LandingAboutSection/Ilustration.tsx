import styled from "styled-components"
import {FC} from "react"
import Paragraph from "../../Text/Paragraph"
interface IProps {
    imgUrl: string,
    quote: string
}

const Ilustration : FC<IProps> = (props) => {
  return (
    <StyledContainer>
        <img src={props.imgUrl} alt="Illustation"/>
        <Paragraph margin="0 auto" lineHeight="160%">{props.quote}</Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
width: 100%;
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    & > p {
      width: 50%;
      text-align: center;
      @media screen and (max-width: 700px){
      width:80%
      
      }
    }
   
`
export default Ilustration