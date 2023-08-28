import styled from "styled-components"
import { motion } from "framer-motion"
import  { FC, ReactNode, useEffect, useRef, useState } from "react"
import { StyledOutlinedButton } from "../../Button/Button"
import { ButtonSize } from "../../Button/IButton"
import { flexCenter } from "../../../styles/mixins"
import { SwipeableHandlers, useSwipeable } from "react-swipeable"
import ColorScheme from "../../../enums/ColorScheme"
interface ICauruselProps  {
    children: ReactNode,
}
const Caurusel:FC<ICauruselProps> = (props) => {
    const [index, setIndex] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    // const caurusel = useRef<HTMLDivElement>(null);
    const row = useRef<HTMLDivElement>(null);
    const moveLeft = ()=>{
        if(!row.current)
            return;
        if(index < -(row.current.childNodes.length -2))
            return;
        
        setIndex(index - 1)
    
    }
    const moveRight = ()=>{
        if(!row.current)
            return;
        if(index >= 0) 
            return;
        setIndex(index + 1)
    
    }
    const handlers :SwipeableHandlers = useSwipeable({
        onSwipedLeft: ()=>{
            moveLeft();
        },
        onSwipedRight: ()=>{
            moveRight();
        },
    })
    
    
    useEffect(()=>{
        if(!row.current)
            return;
        setCardWidth(row.current.children[0].clientWidth );
        
    },[index])
    return (
        <StyledCaurusel {...handlers} >
            <StyledRow  ref={row} animate={{translateX: cardWidth * index}} whileTap={{scale:0.9}}>
                {props.children}
            </StyledRow>
            {/* {props.controlls &&  */}
            <StyledButtons>
                <StyledButton onClick={moveRight}  size={ButtonSize.small}> &lt; </StyledButton>    
                <StyledButton onClick={moveLeft} size={ButtonSize.small} color={ColorScheme.red} borderColor={ColorScheme.red}> &gt; </StyledButton>    
            </StyledButtons>
        </StyledCaurusel>
    )
    }
 const StyledButton = styled(StyledOutlinedButton)`
    border-radius: 50%;
    height: 4.8rem;
    width: 4.8rem;
    font-weight: 900;
    ${flexCenter}
 `   
const StyledButtons = styled.div`
    display: flex;
    gap:2rem;
    padding: 2rem;
    margin-top: 2rem;
`
const StyledCaurusel = styled(motion.div)`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 8rem 0;
    overflow-x: hidden;
    
`
const StyledRow = styled(motion.div)`
    display: flex;
    cursor: grab;
    gap: 2rem;    
    user-select: none;
`


export default Caurusel