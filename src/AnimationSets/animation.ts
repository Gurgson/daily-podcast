import { Variants } from "framer-motion";

export const rotateShow : Variants = {
    start: {
        opacity: 0,
        rotateZ: "90deg"
    },
    end: {
        opacity: 1,
        rotateZ: 0
        
    }
}
export const show : Variants = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
    }
}
export const showFromBottom : Variants = {
    start: {
        opacity: 0,
        y: "5rem"
    },
    end: {
        opacity: 1,
        y:0
    }
}
// left false 
// right true
export const slide = (direction: boolean = false) :Variants => {
    return {
        start: {
            opacity:0,
            translateX: `${(direction)?"":"-"}100%`
        },
        end: {
            opacity:1,
            translateX: "none"
        }
    }
}
