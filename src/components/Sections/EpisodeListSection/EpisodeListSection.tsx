import {FC, useState} from 'react'
import Section from '../Section/Section'
import Paragraph from '../../Text/Paragraph'
import { EpisodesDataList } from '../../../Data/Episodes'
import EpisodeList from '../../EpisodeList/EpisodeList'
import { ButtonSize, ButtonType } from '../../Button/IButton'
import Button from '../../Button/Button'
import ColorScheme from '../../../enums/ColorScheme'
import FontSizes from '../../../enums/FontSizes'
import { motion } from 'framer-motion'

const EpisodeListSection:FC = () => {
  const [isClicked, setClick] = useState<boolean>(false)
  const showMoreItems = () => {
    setClick(true);
  }
  const EpisodeListChildren = EpisodesDataList.sort((a,b)=>{return b.id - a.id}).slice(0, (isClicked)?EpisodesDataList.length:4);
  return (
    <Section id='Episodes' bgcolor={ColorScheme.lightRed}>
        <Paragraph fontSize={FontSizes.heading} lineHeight='120%' fontWeight={700}>Our recent episodes</Paragraph>
        <Paragraph fontSize={FontSizes.smallHeading} lineHeight='160%' color={ColorScheme.grey}>Available on your favorite platform</Paragraph>
        <EpisodeList items={EpisodeListChildren}/>
        <motion.div animate={(!isClicked)?"":{opacity: 0, transition:{ duration: 3}}}>
          <Button handleClick={showMoreItems} size={ButtonSize.big} type={ButtonType.Fill} >Browse all episodes</Button>
        </motion.div>
    </Section>
    
  )
}

export default EpisodeListSection