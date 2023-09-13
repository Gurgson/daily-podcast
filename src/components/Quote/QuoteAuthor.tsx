import { FC } from 'react'
import styled from 'styled-components'
import { Author } from '../../Data/Testimonials'

interface IProps {
  author: Author
}

const QuoteAuthor :FC<IProps> = (props) => {
  return (
    <StyledContainer>
        <Avatar src={props.author.profilePicture} alt={"author: " +props.author.authorName} />
        <span> {props.author.authorName},</span>
        <StyledImg src={props.author.platform} alt={"authors platform"} />

    </StyledContainer>
  )
}
const StyledImg = styled.img`
    max-width: 30rem;
    
`
const Avatar = styled.img`
    border-radius: 50%;
`
const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    font-size: var(--fs-caption);
    
    @media screen  and (max-width: 700px){
      flex-direction: column;
    }
`
export default QuoteAuthor