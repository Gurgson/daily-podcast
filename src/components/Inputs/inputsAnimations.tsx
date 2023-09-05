import { TargetAndTransition } from "framer-motion";
import ColorScheme from "../../enums/ColorScheme";

export const  focusAnimation : TargetAndTransition = {
    borderColor: `var(${ColorScheme.red})`,
    outlineColor: `var(${ColorScheme.red})`,
    transition:{ 
        duration: 1
    }
}
export const tapAnimation : TargetAndTransition = {
    scale: 1.05

}