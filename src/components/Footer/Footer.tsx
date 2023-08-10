import styled from 'styled-components'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <StyledFooter>
      <FooterTop/>
      <FooterBottom/>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    display: flex;
    /* position: relative; */
    flex-direction: column;

`
export default Footer