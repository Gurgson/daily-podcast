import { FC } from 'react'
import styled from 'styled-components'

interface IProps {
    avatar: string,
    authorName: string,
    platform: string
    
}

const QuoteAuthor :FC<IProps> = (props) => {
  return (
    <StyledContainer>
        <Avatar src={props.avatar} alt={"author: " +props.authorName} />
        <span> {props.authorName},</span>
        <img src={props.platform} alt={"authors platform"} />

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