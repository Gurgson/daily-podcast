import {FC, useState} from 'react'
import Section from '../Section/Section'
import { EpisodesDataList } from '../../../Data/Episodes'
import EpisodeList from '../../EpisodeList/EpisodeList'
import { ButtonSize, ButtonType } from '../../Button/IButton'
import Button from '../../Button/Button'
import ColorScheme from '../../../enums/ColorScheme'
import { motion } from 'framer-motion'
import Headline from '../../Headline.tsx/Headline'



const EpisodeListSection:FC = () => {
  const [isClicked, setClick] = useState<boolean>(false)
  
  const showMoreItems = () => {
    setClick(true);
  }
  const EpisodeListChildren = EpisodesDataList.sort((a,b)=>{return b.id - a.id}).slice(0, (isClicked)?EpisodesDataList.length:4);
  return (
    <Section id='Episodes' bgcolor={ColorScheme.lightRed}>
        <Headline main="Our recent episodes" sub="Available on your every platform"/>
        <EpisodeList items={EpisodeListChildren}/>
        <motion.div animate={(!isClicked)?"":{opacity: 0, transition:{ duration: 2}}} aria-disabled="true"> 
          <Button handleClick={showMoreItems} size={ButtonSize.big} type={ButtonType.Fill} >Browse all episodes</Button>
        </motion.div>
    </Section>
    
  )
}

export default EpisodeListSection