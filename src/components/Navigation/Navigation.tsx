import  { FC, useRef, useState } from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'
import Button from '../Button/Button'
import { ButtonType, ButtonSize} from '../Button/IButton'
import Logo from '../Logo/Logo'



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
        <Logo/>
        <StyledMenu>
        <NavigationItem body="Episodes" href="Episodes"/>
        <NavigationItem body="About" href="About"/>
          <Dropdown>
          <span onClick={isDropdownVisible}>More</span>
          <ul ref={dropdownMenu}>
            <NavigationItem  body="Option1" href="/"/>
            <NavigationItem  body="Option2" href="/"/>
          </ul>
          </Dropdown>
        </StyledMenu>
        
        <StyledButtons>
          <NavigationItem body={<Button type={ButtonType.Outlined} size={ButtonSize.small}>Recent Episodes</Button>} href="Episodes"/>
          <NavigationItem body={<Button type={ButtonType.Fill} size={ButtonSize.small}>Subscribe</Button>} href="Episodes"/>
        </StyledButtons>
        

    </StyledNav>
  )
}
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
  & > ul {
    position: absolute;
    opacity: 0;
    transition: 1s;
    z-index: 25;
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
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: transparent;
  max-height: 75px;
  height: 75px;
  flex-shrink: 0;
  background-color:var(--color-red-light);
  
`

export default Navigation