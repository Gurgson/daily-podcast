import { useCallback, useState } from 'react'
import ColorScheme from '../../enums/ColorScheme'
import { flexCenter } from '../../styles/mixins'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import { ButtonSize, ButtonType } from '../Button/IButton'
import { motion } from 'framer-motion'

const DesktopNavigation = () => {
    const [isDropped, setDrop] = useState<boolean>(false);
    const isDropdownVisible = useCallback(()=>{
        if(isDropped){
        setDrop(false);
      }else {
        setDrop(true);
      }
    },[isDropped])
    
  return (
    <StyledContainer>
        <Logo/>
        <StyledMenu>
        <NavigationItem props={{href:"/Home#Episodes", underlined:true}}>Episodes</NavigationItem>
        <NavigationItem props={{href:"/About", underlined:true}}>About</NavigationItem>
        <Dropdown>
          <span onClick={isDropdownVisible}>More</span>
          <StyledUl initial={{scaleY: 0}} animate={{scaleY:isDropped?1:0}}>
            <NavigationItem props={{href:"/Home#Testimonials", underlined:true}}>Testimonials</NavigationItem>
            <NavigationItem props={{href:"/About#Sponsors",underlined:true}}>Sponsors</NavigationItem>
            <NavigationItem props={{href:"/About/#Contact", underlined:true}}>Contact</NavigationItem>
          </StyledUl>
        </Dropdown>
        </StyledMenu>
        
        <StyledButtons>
          <NavigationItem  props={{href:"/Home#Episodes"}}><Button type={ButtonType.Outlined} size={ButtonSize.small}>Recent Episodes</Button></NavigationItem>
          <NavigationItem  props={{href:"/Home#Features"}}><Button type={ButtonType.Fill} size={ButtonSize.small}>Subscribe</Button></NavigationItem>
        </StyledButtons>
    </StyledContainer>
  )
}
const StyledUl = styled(motion.ul)`
    background-color: var(${ColorScheme.lightRed});
    position: absolute;
    bottom: -15rem;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: 1s;
    z-index: 25;
    min-width: 20rem;
    border: 1px solid var(${ColorScheme.grey});
    border-top: none;
    transform-origin: top;
    & > * {

      top: (100% + 0.25rem);
      ${flexCenter}
      position: relative;
      flex-direction: column;
      & > * {
        padding: 1rem;
        
      }
  }
`
const StyledContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  
`
const StyledButtons = styled.div`
  display: flex;
  gap: 2rem;
  
`
const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  & span {
    padding: 1rem;
    &::after{
      position: absolute;
      padding: 0.2rem;
      right: -1.5rem;
      top: calc(50% - 1rem);
      content: "";
      background-repeat: no-repeat;
      background-size: cover;
      display: block;
      height: 1.6rem;
      width: 1.6rem;
      background-image: url('/decorations/arrow-down.svg');
      transition: 1s;
    }
    
  }
  `;
export default DesktopNavigation