import styled from 'styled-components'

const Logo = () => {
  return (
    <StyledLink href='/'>
        <img src="images/logo.svg" alt="DailyPodcastApp" />
    </StyledLink>
  )
}
const StyledLink = styled.a`
    display: block;
    text-decoration: none;
    
    & > img{
    width: 7.5rem;
    height: 7.5rem;
    }
    
`
export default Logo