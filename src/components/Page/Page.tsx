import { motion } from 'framer-motion'
import {FC, ReactNode} from 'react'

import styled from 'styled-components'
import { show } from '../../AnimationSets/animation'

interface IProps {
    props:{
      documentTitle:string
    },
    children: ReactNode
}
const Page :FC<IProps>= ({props, children}) => {
    window.document.title = props.documentTitle;
  return (
    <StyledPage
      variants={show}
      initial="start" 
      animate="end"
      transition={{duration: 2}}
    >
      {children}
    </StyledPage>
  )
}
const StyledPage = styled(motion.main)`
   overflow-x: none;
   max-width: 100vw;
`
export default Page