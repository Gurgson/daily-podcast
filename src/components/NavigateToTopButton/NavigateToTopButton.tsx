import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import ColorScheme from "../../enums/ColorScheme";
import { flexCenter } from "../../styles/mixins";
import { BsArrowUp } from "react-icons/bs";
import Paragraph from "../Text/Paragraph";
import FontSizes from "../../enums/FontSizes";
import useScrollPosition from "../../hooks/useScrollPosition";

const NavigateToTopButton = () => {
    const [isVisible, setVisibility] = useState<boolean>(false);
    const scrollPosY = useScrollPosition();
    useEffect(()=>{
        setVisibility((scrollPosY)>300)
    },[scrollPosY])
    const handleClick = useCallback(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <StyledContainer onClick={handleClick} initial={{opacity: 0}} animate={{opacity:(isVisible)?0.95:0, bottom: 0, transition:{ duration: 1}}}>
        <BsArrowUp/>
        <Paragraph fontSize={FontSizes.caption} lineHeight="160%" fontWeight={700} color={ColorScheme.white}>Go top</Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled(motion.button)`
    ${flexCenter}
    border: none;
    flex-direction: column;
    z-index: 100;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: var(${ColorScheme.red});
    border-top-left-radius: 80%  30% ;
    width: 10rem;
    height: 10rem;
    color: var(${ColorScheme.white});
    cursor: pointer;
    & svg {
        width: 3rem;
        height: 3rem;
    }
`
export default NavigateToTopButton