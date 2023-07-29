import styled from "styled-components"
import { motion } from "framer-motion"
import  { FC, ReactNode, useEffect, useRef, useState } from "react"
interface ICauruselProps  {
    children: ReactNode
}
const Caurusel:FC<ICauruselProps> = (props) => {
    const [width, setWidth] = useState<number>(0);
    const caurusel = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(!caurusel.current)
            return;
        setWidth(caurusel.current.scrollWidth - caurusel.current.offsetWidth)
    },[])
    return (
        <StyledCaurusel ref={caurusel}>
            <StyledRow drag="x" dragConstraints={{right: 0, left: -width}} whileTap={"grabbing"}>
                {props.children}
            </StyledRow>
        </StyledCaurusel>
    )
    }
const StyledCaurusel = styled(motion.div)`
    min-width: 100%;
    width: 100%;
    margin: 8rem 0;
    overflow-x: hidden;
    
`
const StyledRow = styled(motion.div)`
    display: flex;
    cursor: grab;
    gap: 4rem;    
`


export default Caurusel