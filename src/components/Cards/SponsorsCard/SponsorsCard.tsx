import React from 'react'
import styled from 'styled-components'

const SponsorsCard = () => {
  return (
    <StyledContainer>
        <img src="/icons/spotify_full.png" alt="spotify podcast"/>
        <img src="/icons/gpodcast_full.png" alt="google podcast"/>
        <img src="/icons/yt_full.png" alt="youtube podcast" />
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    gap: 6rem;
`
export default SponsorsCard