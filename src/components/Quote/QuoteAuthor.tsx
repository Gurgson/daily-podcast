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
        <img src={props.author.platform} alt={"authors platform"} />

    </StyledContainer>
  )
}
const Avatar = styled.img`
    border-radius: 50%;
`
const StyledContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    font-size: var(--fs-caption);
`
export default QuoteAuthor