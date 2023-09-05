import  { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import FontSizes from '../../enums/FontSizes'
import ColorScheme from '../../enums/ColorScheme'
import { motion } from 'framer-motion'
import useScrollPosition from '../../hooks/useScrollPosition'
import { useViewport } from '../../hooks/useViewport'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'



const Navigation:FC = () => {
    const [isBig, setBig] = useState<boolean>(false);
    const [viewportWidth, setViewportWidth] = useState<number>(0);
    const scrollPosY = useScrollPosition()
    useEffect(()=>{
      setBig((scrollPosY > 200));
    }, [scrollPosY])
    const width = useViewport()
    useEffect(()=>{
      setViewportWidth(width)
    },[width])
  
  return (
    <StyledNav initial={{height:"120px"}} animate={{height:(!isBig)?"120px":"80px",transition: {duration:0.5}}}>        
        {viewportWidth>900?<DesktopNavigation/>:<MobileNavigation/>}
        
      
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  text-decoration: none;
  font-size: var(${FontSizes.body});
  color: var(${ColorScheme.black});
  font-weight: 700;
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  background-color: transparent;
  background-color:var(${ColorScheme.lightRed});
  z-index: 200;
  max-width: 100%;
  border-bottom: 1px solid var(${ColorScheme.grey});
  -webkit-backface-visibility: hidden;

`

export default Navigation