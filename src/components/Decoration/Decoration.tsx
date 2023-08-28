import styled from 'styled-components'
import { DecorationHorizontalPosition, DecorationVerticalPosition } from './IDecoration'
import { FC } from 'react';


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
   
}
const Decoration:FC<IDecoration> = (props) => {
  return (
    <StyledDecoration src={props.href} rotate={props.rotate} isMirrored={props.isMirrored} z={props.z} horizontal={props.horizontal} vertical={props.vertical}/>
  ) 
}

const StyledDecoration = styled.img<IStyledDecoration>`
    position: absolute;
    display: block;
    z-index: ${p=> p.z?p.z: 1};
    top: ${p=>p.vertical || 0}%;
    left: ${p=>p.horizontal || 0}%;
    transform: scaleX(${p=>p.isMirrored?-1:1}) rotate(${p=>p.rotate?`${p.rotate}deg`:"0deg"});
`
export default Decoration