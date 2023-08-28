import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
  return (
    <StyledLink to='/'>
        <img src="/images/logo.svg" alt="DailyPodcastApp" />
    </StyledLink>
  )
}
const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    user-select: none;
    
    & > img{
    width: 7.5rem;
    height: 7.5rem;
    }
    
`
export default Logo