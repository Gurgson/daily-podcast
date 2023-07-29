import  { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../Button/Button'
import { ButtonType, ButtonSize} from '../Button/IButton'



const Navigation:FC = () => {
  const [isDropped, setDrop] = useState<boolean>(false);
  const dropdownMenu = useRef<HTMLUListElement>(null);
  const isDropdownVisible = ()=>{
  if(!dropdownMenu.current)
    return;
  if(isDropped){
      dropdownMenu.current.style.opacity ="0";
      setDrop(false);
    }else {
      dropdownMenu.current.style.opacity ="1";
      setDrop(true);
    }
  }
  return (
    <StyledNav>

        <StyledLinkLogo body={<img src="/images/logo.svg" alt="logo" width={"75px"} height={'75px'} />} href="/"/>
        <NavigationItem body="Episodes" href="Episodes"/>
        <NavigationItem body="About" href="About"/>
        <StyledMenu>
          <Dropdown>
          <span onClick={isDropdownVisible}>More</span>
          <ul ref={dropdownMenu}>
            <StyledLinkLogo  body="Option1" href="/"/>
            <StyledLinkLogo  body="Option2" href="/"/>
          </ul>
          </Dropdown>
        </StyledMenu>
        
        <StyledButtons>
          <NavigationItem body={<Button type={ButtonType.Outlined} size={ButtonSize.small} buttonText='Recent Episodes'/>} href="Episodes"/>
          <NavigationItem body={<Button type={ButtonType.Fill} size={ButtonSize.small} buttonText='Subscribe'/>} href="Episodes"/>
        </StyledButtons>
        

    </StyledNav>
  )
}
const StyledMenu = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`
const StyledButtons = styled.div`
  display: flex;
  gap: 2rem;
`
const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
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
      background-image: url('/images/arrow-down.svg');
    }
    
  }
  & > ul {
    position: absolute;
    opacity: 0;
    transition: 1s;
  }
  & ul > * {
   
    top: (r100% + 0.25rem);
    display: flex;
    position: relative;
    flex-direction: column;
    & > * {
      padding: 1rem;
      width: 10rem;
    }
    opacity: 1;
    
    /* &:hover::after{
      
    } */
  }
  `;
const StyledNav = styled.nav`
  text-decoration: none;
  font-size: var(--fs-body);
  color: var(--color-black);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  background-color: transparent;
  max-height: 75px;
  height: 75px;
  flex-shrink: 0;
`
const StyledLinkLogo = styled(NavigationItem)`
  flex-shrink: 0;

` 

export default Navigation