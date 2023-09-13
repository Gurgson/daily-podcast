import { FC } from 'react'
import styled from 'styled-components'

interface IProps {
  isSmall?: boolean
}
const SponsorsCard:FC<IProps> = (props) => {
  return (
    <StyledContainer isSmall={props.isSmall || false}>
        <a href="https://podcasts.google.com/"><img src="/icons/spotify_full.png" alt="spotify podcast"/></a>
        <a href="https://open.spotify.com/genre/podcasts-web"><img src="/icons/gpodcast_full.png" alt="google podcast"/></a>
        <a href="https://www.youtube.com/"><img src="/icons/yt_full.png" alt="youtube podcast" /></a>
        
        
    </StyledContainer>
  )
}
const StyledContainer = styled.div<IProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 6rem;
    & > a > img {
      height: ${p=>p.isSmall?"2.2rem":"2.8rem"};
    }
`
export default SponsorsCard