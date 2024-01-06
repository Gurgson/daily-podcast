import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";
import styled from "styled-components";
import { rotateShow } from "../../AnimationSets/animation";


interface IProps {
    children: string | string[],
    stagger?: number
    delay? :number
}


const AnimatedText : FC<IProps>= ({children,stagger, delay}) => {
    const text = Array.isArray(children)? children : [children];
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, {once: true})
  return (
    <motion.span 
      ref={ref}
      initial="start"
      animate={isInView?"end":"start"}
      transition={{staggerChildren: stagger || 0.2, delayChildren: delay || 0}}
      >
       {text.map((line, lineIndex) => (
        <BlockSpan  key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word, wordIndex) => (
            <InlineBlockSpan key={`${word}-${wordIndex}`}>
              {word.split("").map((char, charIndex) => (
                <InlineBlockSpan
                  key={`${char}-${charIndex}`}
                  variants={rotateShow}
                >
                  {char}
                </InlineBlockSpan>
              ))}
              <span className="inline-block">&nbsp;</span>
            </InlineBlockSpan>
          ))}
        </BlockSpan>
      ))}
    </motion.span>
  )
}
const BlockSpan = styled.span`
    display: block
`;
const InlineBlockSpan = styled(motion.span)`
    display: inline-block;
`

export default AnimatedText