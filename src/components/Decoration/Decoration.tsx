import styled from 'styled-components'
import { DecorationHorizontalPosition, DecorationVerticalPosition } from './IDecoration'
import { FC,useState,useEffect, useRef } from 'react';
import { useViewport } from '../../hooks/useViewport';
import {  motion, useInView } from 'framer-motion';
import { slide } from '../../AnimationSets/animation';



interface IStyledDecoration  {
    vertical: DecorationVerticalPosition | number;
    horizontal: DecorationHorizontalPosition | number; 
    width?: number;
    heigth?: number;
    z?: number;
    rotate?: number;
    isMirrored?: boolean;
    alt?: string;
    isAnimated?: boolean;
    animateOnce?: boolean;
    animateWhenInView?: boolean;
    animationDirection?: boolean;
    
    
}
interface IDecoration extends IStyledDecoration {
    href: string,
    visableWhenWidthOver?: number;
    
   
}
const Decoration:FC<IDecoration> = (props) => {
  const [portWidth, setViewportWidth] = useState<number>(0);
  const [visibility, setVisibility] = useState<boolean>(true);
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, {once: props.animateOnce });
  const viewPort = useViewport();
  useEffect(()=>{
    setViewportWidth(viewPort);
    if(props.visableWhenWidthOver) {
      if(props.visableWhenWidthOver >= portWidth) 
        return setVisibility(false);
    }
    return setVisibility(true)
      
  },[viewPort, portWidth, props.visableWhenWidthOver])
  
  
  return (
    visibility && 
    <StyledDecoration 
      ref={ref}
      variants={slide(props.animationDirection || false)}
      initial={props.isAnimated?"start":""}  
      animate={
        props.isAnimated || isInView?"end":""
      }
      transition={
        {
          duration: 1,
          
        }
      }

      src={props.href} alt={props.alt || ""} 
      
      rotate={props.rotate} 
      isMirrored={props.isMirrored} 
      z={props.z} 
      horizontal={props.horizontal} 
      vertical={props.vertical}
    />
  ) 
}

const StyledDecoration = styled(motion.img)<IStyledDecoration>`
    position: absolute;
    display: block;
    z-index: ${p=> p.z?p.z: 1};
    top: ${p=>p.vertical || 0}%;
    left: ${p=>p.horizontal || 0}%;
    transform: scaleX(${p=>p.isMirrored?-1:1}) rotate(${p=>p.rotate?`${p.rotate}deg`:"0deg"});
    user-select: none;
    pointer-events: none;
`
export default Decoration