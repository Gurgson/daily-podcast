import styled from 'styled-components'
import { DecorationHorizontalPosition, DecorationVerticalPosition } from './IDecoration'
import { FC,useState,useEffect } from 'react';
import { useViewport } from '../../hooks/useViewport';



interface IStyledDecoration  {
    vertical: DecorationVerticalPosition | number;
    horizontal: DecorationHorizontalPosition | number; 
    width?: number;
    heigth?: number;
    z?: number;
    rotate?: number;
    isMirrored?: boolean;
    
}
interface IDecoration extends IStyledDecoration {
    href: string,
    visableWhenWidthOver?: number;
   
}
const Decoration:FC<IDecoration> = (props) => {
  const [portWidth, setViewportWidth] = useState<number>(0);
  const [visibility, setVisibility] = useState<boolean>(true);
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
    visibility && <StyledDecoration  src={props.href} rotate={props.rotate} isMirrored={props.isMirrored} z={props.z} horizontal={props.horizontal} vertical={props.vertical}/>
  ) 
}

const StyledDecoration = styled.img<IStyledDecoration>`
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