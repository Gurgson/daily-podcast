import styled from "styled-components"
import Logo from "../Logo/Logo"
import { useCallback, useState } from "react"
import NavigationItem from "./NavigationItem";
import { flexCenter } from "../../styles/mixins";
import { ButtonSize, ButtonType } from "../Button/IButton";
import Button from "../Button/Button";
import ColorScheme from "../../enums/ColorScheme";
import { motion } from "framer-motion";


const MobileNavigation = () => {
    const [isClicked, setClick] = useState<boolean>(false);
    const handleClick = useCallback(()=>{
        if(isClicked)
            return setClick(false);
        return setClick(true);
    },[isClicked])
  return (  
    
    <StyledContainer>
        <Logo/>
        <BurgerMenu isClicked={isClicked} onClick={handleClick} name="menu-burger">
            <div></div><div></div><div></div>
        </BurgerMenu>
        <StyledMenu initial={{scaleY:0, transformOrigin:"top"}} animate={{scaleY:(isClicked)?1:0, transition:{duration: 0.3, type:"tween"}}}>
            <li>
                <NavigationItem props={{href:"/Home#Episodes", underlined:true}}>Episodes</NavigationItem>
            </li>
            <li>
                <NavigationItem props={{href:"/About", underlined:true}}>About</NavigationItem>
                        
            </li>
            <li>
                <NavigationItem props={{href:"/Home#Testimonials", underlined:true}}>Testimonials</NavigationItem>
           
            </li>
            <li>
                <NavigationItem props={{href:"/About#Sponsors",underlined:true}}>Sponsors</NavigationItem>
            </li>
            <li>
                <NavigationItem props={{href:"/About#Contact", underlined:true}}>Contact</NavigationItem>
                  
            </li>
            <li>
              <NavigationItem  props={{href:"/Home#Episodes"}}><Button type={ButtonType.Outlined} size={ButtonSize.small}>Recent Episodes</Button></NavigationItem>
           
            </li>
            <li>
                <NavigationItem  props={{href:"/Home#Features"}}><Button type={ButtonType.Fill} size={ButtonSize.small}>Subscribe</Button></NavigationItem> 
            </li>
        </StyledMenu>
    </StyledContainer>
  )
}
const StyledMenu = styled(motion.ul)`
    position: absolute;
    width:120%;
    background-color: var(${ColorScheme.lightRed});
    left: -10%;
    top: 100%;
    border-bottom: 1px solid  var(${ColorScheme.black});
    & > li {
        ${flexCenter}
    }
    
`
interface IButton {
        isClicked: boolean
}
const BurgerMenu = styled.button<IButton>`
    display: block;
    position: relative;
    background-color: transparent;
    border-color: transparent;
    width: 50px;
    height: 50px;
    user-select: none;
    cursor: pointer;
    & > div{
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
        &:first-child{
            transform: ${p=>p.isClicked?`translate(0, 11px) rotate(-45deg)`:""};
        }
        &:nth-child(2)
        {
            opacity: ${p=>p.isClicked?0:1}
        }
        &:nth-child(3){
            transform: ${p=>p.isClicked?`translate(0, -11px) rotate(45deg)`:""}};
        }
    

`
const StyledContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    z-index: 200;
`
export default MobileNavigation