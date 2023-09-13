import { FC, useState, ReactNode } from "react"
import { ButtonSize, ButtonType } from "./IButton"
import styled, { css } from "styled-components"
import { TargetAndTransition, motion } from "framer-motion";
import ColorScheme from "../../enums/ColorScheme";

interface IStyledButtonProps  {
    size:ButtonSize,
    textColor?: ColorScheme,
    borderColor?: ColorScheme
}
interface IButtonProps extends IStyledButtonProps {
    type: ButtonType,
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: ReactNode
}
interface IHoverAnimations {
    onHoverStart: () => void,
    onHoverEnd: () => void,
}
const Button:FC<IButtonProps> = (props) => {
    const [isHovered, setHover] = useState<boolean>(false);
    const hover: TargetAndTransition = {
        transition: {
            duration: (isHovered)?0.5:1
        },
        translateY: (isHovered)? "-0.75rem":0
    }
    const hoverAnimations :IHoverAnimations = {
        onHoverStart: ()=>{setHover(true)},
        onHoverEnd: ()=>{setHover(false)},
    }
    const clickAnimation :TargetAndTransition= {scale:0.9};
    return (<>
        {props.type === ButtonType.Fill  && <StyledFillButton whileTap={clickAnimation} {...hoverAnimations} animate={hover}   onClick={props.handleClick} size={props.size}>{props.children}</StyledFillButton>}
        {props.type === ButtonType.Outlined  && <StyledOutlinedButton whileTap={clickAnimation} {...hoverAnimations} animate={hover}  onClick={props.handleClick} textColor={props.textColor} borderColor={props.borderColor} size={props.size}>{props.children}</StyledOutlinedButton>}
    </>
        
    )
}
const ButtonSharedStyle = css`
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
`;
export const StyledOutlinedButton = styled(motion.button)<IStyledButtonProps>`
    color: var(${p=>p.textColor?p.textColor:ColorScheme.black});
    padding: ${p=>p.size};
    background-color: transparent;
    border: 2px solid;
    border-color: var(${p=>p.borderColor?p.borderColor:ColorScheme.black});
    ${ButtonSharedStyle}
    
`;
const StyledFillButton = styled(motion.button)<IStyledButtonProps>`
    padding: ${p=>p.size};
    border: none;
    background-color: var(${ColorScheme.black});
    color: var(${ColorScheme.lightBlue});
    box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
    ${ButtonSharedStyle}


    
`;
export default Button