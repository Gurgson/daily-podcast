import styled from "styled-components"
import {FC, useRef} from "react"
import Paragraph from "../../Text/Paragraph"
import { motion, useInView } from "framer-motion"
import { slide } from "../../../AnimationSets/animation"
interface IProps {
    imgUrl: string,
    quote: string,
    direction: boolean
}

const Ilustration : FC<IProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {once: true})

  return (
    <StyledContainer ref={ref} variants={slide(props.direction)} transition={{duration: 1.2}} initial="start" animate={(isInView)?"end":""}>
        <img src={props.imgUrl} alt="Illustation"/>
        <Paragraph margin="0 auto" lineHeight="160%">{props.quote}</Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled(motion.div)`
    width: 100%;
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;
    & > p {
      width: 50%;
      text-align: center;
      @media screen and (max-width: 700px){
      width:80%
      
      }
    }
   
`
export default Ilustration