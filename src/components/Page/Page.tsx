import { motion } from 'framer-motion'
import {useEffect, FC, ReactNode} from 'react'
import styled from 'styled-components'
interface IProps {
    props:{
      documentTitle:string
    },
    children: ReactNode
}
const Page :FC<IProps>= ({props, children}) => {
    window.document.title = props.documentTitle;
    useEffect(() => {
        window.scrollTo(0, 0)
        
      }, [])
  return (
    <StyledPage 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition:{
        duration: 1.5,
        ease:"easeIn"
    }}}
      exit={{opacity: 0}}
    >
      {children}
    </StyledPage>
  )
}
const StyledPage = styled(motion.main)`
    padding-top: 75px;
`
export default Page