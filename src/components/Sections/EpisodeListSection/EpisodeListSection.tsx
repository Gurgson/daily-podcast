import {FC, useState} from 'react'
import Section from '../Section/Section'
import Paragraph from '../../Text/Paragraph'
import { EpisodesDataList } from '../../../Data/Episodes'
import EpisodeList from '../../EpisodeList/EpisodeList'
import { ButtonSize, ButtonType } from '../../Button/IButton'
import Button from '../../Button/Button'

const EpisodeListSection:FC = () => {
  const [isClicked, setClick] = useState<boolean>(false)
  const showMoreItems = () => {
    setClick(true);
  }
  const EpisodeListChildren = EpisodesDataList.sort((a,b)=>{return b.id - a.id}).slice(0, (isClicked)?EpisodesDataList.length:4);
  return (
    <Section bgcolor='--color-red-light'>
        <Paragraph fontSize='--fs-heading' lineHeight='120%' fontWeight={700}>Our recent episodes</Paragraph>
        <Paragraph fontSize='--fs-smallHeading' lineHeight='160%' color='--color-grey'>Available on your favorite platform</Paragraph>
        <EpisodeList items={EpisodeListChildren}/>
        <Button handleClick={showMoreItems} size={ButtonSize.big} type={ButtonType.Fill} >Browse all episodes</Button>
    </Section>
    
  )
}

export default EpisodeListSection