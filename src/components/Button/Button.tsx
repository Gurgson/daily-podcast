import { FC } from "react"
import { ButtonSize, ButtonType } from "./IButton"
import styled, { css } from "styled-components"

interface IStyledButtonProps  {
    size:ButtonSize,
    textColor?: string,
    borderColor?: string
}
interface IButtonProps extends IStyledButtonProps {
    type: ButtonType,
    children: string
}


const Button:FC<IButtonProps> = (props) => {
  return (<>
    {props.type === ButtonType.Fill  && <StyledFillButton size={props.size}>{props.children}</StyledFillButton>}
    {props.type === ButtonType.Outlined  && <StyledOutlinedButton textColor={props.textColor} borderColor={props.borderColor} size={props.size}>{props.children}</StyledOutlinedButton>}
  </>
    
  )
}
const ButtonSharedStyle = css`
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    transition: 1s;
    &:hover{
        transform: translateY(-0.25rem);
    }
`;
const StyledOutlinedButton = styled.button<IStyledButtonProps>`
    color: var(${p=>p.textColor?p.textColor:"--color-black"});
    ${p=>p.borderColor || ""}
    
    padding: ${p=>p.size};
    background-color: transparent;
    border: 2px solid;
    ${ButtonSharedStyle}
    
`;
const StyledFillButton = styled.button<IStyledButtonProps>`
    padding: ${p=>p.size};
    border: none;
    background-color: var(--color-black);
    color: var(--color-blue-light);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ${ButtonSharedStyle}


    
`;
export default Button